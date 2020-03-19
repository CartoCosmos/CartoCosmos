from ipyleaflet import *
import ipywidgets as widgets
import math as Math
import json
import geojson
import shapely.geometry as geo
import shapely.wkt
import os
import urllib.request


class planetary_maps:
    """ The Central class that creates interactive planetary maps in Jupyter Notebooks. 
    Works with all target bodies supported by the USGS by loading the body’s base layers 
    and overlays in a LayerCollection."""
    
    def __init__(self, targetName):
        """ Initializes planetary map of the specific target.
    
        :type targetName: String
        :param targetName: The name of the target you wish to map.
        """
        self.target_name = targetName
        self.layers = []
        self.planet_map = None
        self.map_layers = {
            'base': [],
            'overlays': []
        }
        self.display_change = False
        self.fullscreen = False
        self.range_control = None
        self.lat_control = None
        self.direction_control = None
        self.label_control = None
        self.gui = planetary_gui()
        self.dmajor_radius = 0
        self.dminor_radius = 0

        # Variables to keep track of how many times handle_feature_click is called.
        # There is a bug where it is called twice, the first time passing in feature
        # and the second time passing in the coordinates. We need both of those variables
        self.handle_feature_click_counter = 0
        self.handle_feature_click_feature = None

        self.json_dict = None
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "/geoServerLayers.json", 'r') as fp:
            self.json_dict = json.load(fp)

        self.find_radius()
        self.create_layers()
        self.create_map()

        self.feature_collection = {
            'type': 'FeatureCollection',
            'features': []
        }

    def find_radius(self):
        """ Finds the a and c axis radii of that specific target."""
        targets = self.json_dict['targets']
        for i, target in enumerate(targets):
            current_target = targets[i]
            if current_target['name'].lower() == self.target_name:
                self.dmajor_radius = float(
                    current_target['aaxisradius']) * 1000.0
                self.dminor_radius = float(
                    current_target['caxisradius']) * 1000.0
                break

    def create_layers(self):
        """ Grabs all the layers for the specific target."""
        targets = self.json_dict['targets']
        for i, target in enumerate(targets):
            current_target = targets[i]
            if current_target['name'].lower() == self.target_name:
                json_layers = current_target['webmap']
                for j, layers in enumerate(json_layers):
                    current_layer = json_layers[j]
                    if current_layer['type'] == 'WMS':
                        if current_layer['transparent'] == 'false':
                            self.map_layers['base'].append(current_layer)
                        else:
                            if current_layer['displayname'] == "Show Feature Names":
                                continue
                            self.map_layers['overlays'].append(current_layer)

        for layer in self.map_layers['base']:
            if layer['projection'] == 'cylindrical':
                wms_layer = WMSLayer(
                    url=layer["url"] + "?map=" + layer["map"],
                    layers=layer['layer'],
                    name=layer['displayname'],
                    crs='EPSG4326',
                    base=True,
                    show_loading=False,
                )
                self.layers.append(wms_layer)

        for layer in self.map_layers['overlays']:
            if layer['projection'] == 'cylindrical':
                wms_layer = WMSLayer(
                    url=layer["url"] + "?map=" + layer["map"],
                    layers=layer['layer'],
                    name=layer['displayname'],
                    crs='EPSG4326',
                    base=False,
                    transparent=True,
                    format="image/png",
                    show_loading=False,
                    visible=False,
                )
                self.layers.append(wms_layer)

    def handle_interaction(self, **kwargs):
        """ Gets and displays the coordinates of the user’s mouse position on the map. 
        Takes in the GUI coordinate handler in order to display different longitude directions 
        and ranges as well as different latitude types.
    
        :type kwargs: Event
        :param kwargs: Leaflet’s Interaction Object.
        """
        if kwargs.get('type') == 'mousemove':
            coords = kwargs.get('coordinates')

            lat = coords[0]
            lng = coords[1]

            if lng < 0:
                if Math.floor(lng/180) % 2 == 0:
                    lng = 180 - (abs(lng) % 180)
                else:
                    lng = (lng % 180) - 180
            else:
                if Math.floor(lng/180) % 2 == 0:
                    lng = lng % 180
                else:
                    lng = -180 + (abs(lng) % 180)

            if self.gui.get_longitude_range().value == "0 to 360":
                lng += 180

            if self.gui.get_lat_domain().value == "Planetographic":
                converted_latitude = Math.radians(lat)
                converted_latitude = Math.atan(
                    ((self.dmajor_radius / self.dminor_radius)**2) * (Math.tan(converted_latitude)))
                converted_latitude = Math.degrees(converted_latitude)
                lat = converted_latitude

            if self.gui.get_longitude_direction().value == "Positive West":
                if(self.gui.get_longitude_range().value == "-180 to 180"):
                    lng *= -1
                else:
                    lng = Math.fabs(lng - 360)

            self.gui.get_lat_lon_label().value = "Lat, Lon: " + \
                str(round(lat, 2)) + ", " + str(round(lng, 2))

    def create_map(self):

        """ Creates the map instance of the specific target. 
        Also adds all the controls to the map."""
        self.planet_map = Map(layers=tuple(self.layers),
                              center=(0, 0), zoom=1, crs='EPSG4326')

        draw_control = DrawControl()
        draw_control.polyline = {
            "shapeOptions": {
                "color": "#6bc2e5",
                "weight": 8,
                "opacity": .5
            }
        }

        draw_control.polygon = {
            "shapeOptions": {
                "fillColor": "#6be5c3",
                "color": "#6be5c3",
                "fillOpacity": .5
            },
            "drawError": {
                "color": "#dd253b",
                "message": "Oups!"
            },
            "allowIntersection": False
        }

        draw_control.circle = {
            "shapeOptions": {
                "fillColor": "#efed69",
                "color": "#efed69",
                "fillOpacity": .5
            }
        }

        draw_control.rectangle = {
            "shapeOptions": {
                "fillColor": "#fca45d",
                "color": "#fca45d",
                "fillOpacity": .5
            }
        }

        draw_control.on_draw(self.handle_draw)
        self.gui.get_wkt_button().on_click(self.handle_WKT_button)

        self.range_control = WidgetControl(
            widget=self.gui.get_longitude_range(), position='topright')
        self.lat_control = WidgetControl(
            widget=self.gui.get_lat_domain(), position='topright')
        self.direction_control = WidgetControl(
            widget=self.gui.get_longitude_direction(), position='topright')
        self.label_control = WidgetControl(
            widget=self.gui.get_lat_lon_label(), position='bottomright')

        self.planet_map.add_control(draw_control)
        self.planet_map.add_control(LayersControl(position='topright'))
        self.planet_map.on_interaction(self.handle_interaction)
        fullscreen_control = FullScreenControl(position='bottomleft')
        self.planet_map.add_control(fullscreen_control)
        self.planet_map.on_interaction(self.handle_fullscreen)
        self.planet_map.add_control(ScaleControl(position='bottomleft'))

    def display_map(self):
        """ Displays the map and the GUI elements to the screen."""
        display(self.gui.get_longitude_range())
        display(self.gui.get_lat_domain())
        display(self.gui.get_longitude_direction())
        display(self.gui.get_lat_lon_label())
        display(self.planet_map)
        display(self.gui.get_draw_label())
        display(self.gui.get_wkt_text_box())
        display(self.gui.get_wkt_button())

        # Display map first, then add features
        self.add_wfs_features()

    def add_wkt(self, wktString):
        """ Takes in a Well-Known text string 
        and draws it on the planetary map
    
        :type wktString: String
        :param wktString: Well-Known text string to draw on the map.
    
        :raises: Invalid WKT String.
        """
        try:
            g1 = shapely.wkt.loads(wktString)
            g2 = geojson.Feature(geometry=g1, properties={})
            geo_json = GeoJSON(data=g2, style={
                               'color': 'yellow', 'opacity': 1, 'weight': 1.9, 'fillOpacity': 0.5})
            self.planet_map.add_layer(geo_json)
        except:
            self.gui.get_wkt_text_box().value = "Invalid WKT String"

    def handle_draw(self, *args, **kwargs):
    
        """ Creates and displays the Well-Known text string when 
        the user draws a shape on the map.
    
        :type args: Event
        :param args: On draw.
    
        :type kwargs: Object
        :param kwargs: The GeoJson of the shape that was drawn.
        """
        geo_json = kwargs.get('geo_json')
        data = geo_json['geometry']
        geom = geo.shape(data)
        self.gui.get_wkt_text_box().value = geom.wkt

    def handle_fullscreen(self, *args, **kwargs):
        """ On fullscreen will add GUI elements to the map. 
        The GUI elements will go away when fullscreen is closed.

        :type args: Event
        :param args: On interaction with Leaflet map.

        :type kwargs: Object
        :param kwargs: Leaflet’s map object.
        """
        if self.fullscreen != self.planet_map.fullscreen:
            self.fullscreen = self.planet_map.fullscreen
            self.display_change = True

        if self.display_change:
            self.display_change = False

            if self.fullscreen:
                self.planet_map.add_control(self.range_control)
                self.planet_map.add_control(self.lat_control)
                self.planet_map.add_control(self.direction_control)
                self.planet_map.add_control(self.label_control)
            else:
                self.planet_map.remove_control(self.range_control)
                self.planet_map.remove_control(self.lat_control)
                self.planet_map.remove_control(self.direction_control)
                self.planet_map.remove_control(self.label_control)

    def handle_WKT_button(self, *args, **kwargs):
    
        """ Will draw the Well-Known text string 
        in the text box on click of draw button.

        :type args: Event
        :param args: On click of drawn button
    
        :type kwargs: Object
        :param kwargs: WKT button.
        """
        self.add_wkt(self.gui.get_wkt_text_box().value)

    def add_wfs_features(self):
    
        """Grabs and Adds the wfs surface features layer 
        to the map for the specific target."""
        geoJsonUrl = ("https://astrocloud.wr.usgs.gov/dataset/data/nomenclature/{}/WFS?"
                      "service=WFS&version=1.1.0&request=GetFeature&outputFormat=application%2Fjson"
                      "&srsName=EPSG%3A4326".format(self.target_name.upper()))

        break_out = False
        while not break_out:
            try:    # Try until no 404 error is thrown by server
                with urllib.request.urlopen(geoJsonUrl, timeout=240) as url:
                    jsonp = json.loads(url.read())

                    # Sort features by diameter
                    jsonp['features'] = sorted(
                        jsonp['features'], key=lambda feature: feature["properties"]["diameter"], reverse=True)
                    geo_json = GeoJSON(data=jsonp, name="Show Feature Names")
                    geo_json.point_style = {
                        'fillOpacity': 1,
                        'radius': 3
                    }

                    geo_json.on_click(self.handle_feature_click)
                    self.planet_map.add_layer(geo_json)
                    break_out = True

            except:
                continue

    def handle_feature_click(self, feature=None, coordinates=None, **kwargs):

        """ Highlights the specific feature when you click on it on the map.

        :type feature: String
        :param feature: feature name.
    
        :type coordinates: List
        :param coordinates: Coordinates of the clicked position.
    
        :type kwargs: Event
        :param kwargs: On click.
    
        :rtype: NULL
        """
        self.handle_feature_click_counter += 1
        if self.handle_feature_click_counter == 1:
            self.handle_feature_click_feature = feature

        elif self.handle_feature_click_counter == 2:
            popup = Popup(
                location=coordinates,
                child=widgets.HTML(self.handle_feature_click_feature['name']),
                close_button=True,
                auto_close=True,
                close_on_escape_key=False
            )
            self.planet_map.add_layer(popup)
            self.handle_feature_click_counter = 0
            return


class planetary_gui:

    """ Creates the GUI elements needed for the Planetary Maps.	"""
    def __init__(self):

        """ Creates Planetary GUI class"""
        self.longitude_range = None
        self.lat_domain = None
        self.longitude_direction = None
        self.lat_lon_label = None
        self.draw_Label = None
        self.wkt_text_box = None
        self.wkt_button = None
        self.create_widgets()

    def create_widgets(self):
    
        """ Initializes the different GUI elements"""
        self.longitude_range = widgets.ToggleButtons(
            options=['0 to 360', '-180 to 180'],
            description='',
            disabled=False,
            button_style='',  # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Longitude from 0 to 360', 'Longitude from -180 to 180']
        )

        self.lat_domain = widgets.ToggleButtons(
            options=['Planetocentric', 'Planetographic'],
            description='',
            disabled=False,
            button_style='',  # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Regular Latitude', 'Tangent Latitude']
        )

        self.lat_lon_label = widgets.Label()
        self.draw_label = widgets.Label()

        self.longitude_direction = widgets.ToggleButtons(
            options=['Positive East', 'Positive West'],
            description='',
            disabled=False,
            button_style='',  # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Longitude increasing east', 'Longitude Increasing West']
        )

        self.wkt_text_box = widgets.Text(
            value='',
            placeholder='Type something',
            description='WKT String:',
            disabled=False,
            layout=widgets.Layout(width='75%')
        )

        self.wkt_button = widgets.Button(
            description='Draw',
            disabled=False,
            button_style='',  # 'success', 'info', 'warning', 'danger' or ''
            tooltip='Draw WKT object'
        )

    def get_wkt_button(self):
    
        """ Getter method for the Well-Known Text button.
    
        :rtype: Well-Known Text button Object
        """
        return self.wkt_button

    def get_wkt_text_box(self):
    
        """ Getter method for the Well-Known Text Box.

        :rtype: Well-Known Text Box Object
        """
        return self.wkt_text_box

    def get_longitude_direction(self):
    
        """ Getter method for the Longitude Direction Selector.
    
        :rtype: Longitude Direction Selector Object
        """
        return self.longitude_direction

    def get_draw_label(self):
    
        """ Getter method for the Well-Known Text Draw Label.
    
        :rtype: Well-Known Text Draw Label Object
        """    
        return self.draw_label

    def get_lat_lon_label(self):

        """ Getter method for the Coordinate Input Box.
    
        :rtype: Coordinate Input Box Object
        """
        return self.lat_lon_label

    def get_lat_domain(self):
    
        """ Getter method for the Latitude Domain Selector.

        :rtype: Latitude Domain Selector Object
        """
        return self.lat_domain

    def get_longitude_range(self):
    
        """ Getter method for the Longitude Range Selector.
    
        :rtype: Longitude Range Selector Object
        """
        return self.longitude_range
