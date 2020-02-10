from ipyleaflet import *
import ipywidgets as widgets
import math as Math
import json
import geojson
import shapely.geometry as geo
import shapely.wkt

class Planetary_Maps:
    def __init__(self, targetName):
        self.targetName = targetName
        self.json_file = 'geoServerLayers.json'
        self.base_layers = []
        self.planet_map = None
        self.map_layers = {
            'base': [],
            'overlays': []
            }
        self.longitudeRange = None
        self.latDomain = None
        self.longitudeDirection = None
        self.latLonLabel = None
        self.drawLabel = None
        self.wktTextBox = None
        self.wktButton = None
        self.dMajorRadius = 0
        self.dMinorRadius = 0
        self.Find_Radius()
        self.Create_Layers()
        self.Create_Widgets()
        self.Create_Map()
        self.feature_collection = {
            'type': 'FeatureCollection',
            'features': []
        }

    def Find_Radius(self):
        if self.targetName == "mars":
            self.dMajorRadius = 3396190.0
            self.dMinorRadius = 3376200.0
        elif self.targetName == "moon":
            self.dMajorRadius = 1737400.0
            self.dMinorRadius = 1737400.0
        elif self.targetName == "mercury":
            self.dMajorRadius = 2439400.0
            self.dMinorRadius = 2439400.0
        else:
            print("Target Planet Not Supported")

    def Create_Widgets(self):
        self.longitudeRange = widgets.ToggleButtons(
            options=['0 to 360', '-180 to 180'],
            description='',
            disabled=False,
            button_style='', # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Longitude from 0 to 360', 'Longitude from -180 to 180']
        )
        
        self.latDomain = widgets.ToggleButtons(
            options=['Planetocentric', 'Planetographic'],
            description='',
            disabled=False,
            button_style='', # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Regular Latitude', 'Tangent Latitude']
        )

        self.latLonLabel = widgets.Label()
        self.drawLabel = widgets.Label()

        self.longitudeDirection = widgets.ToggleButtons(
            options=['Positive East', 'Positive West'],
            description='',
            disabled=False,
            button_style='', # 'success', 'info', 'warning', 'danger' or ''
            tooltips=['Longitude increasing east', 'Longitude Increasing West']
        )

        self.wktTextBox = widgets.Text(
            value='',
            placeholder='Type something',
            description='WKT String:',
            disabled=False,
            layout=widgets.Layout(width='75%')
        )

        self.wktButton = widgets.Button(
            description='Draw',
            disabled=False,
            button_style='', # 'success', 'info', 'warning', 'danger' or ''
            tooltip='Draw WKT object'
        )

        
        self.wktButton.on_click(self.handle_WKT_button)

    def Create_Layers(self):
        with open(self.json_file, 'r') as fp:
            json_dict = json.load(fp)

        targets = json_dict['targets']
        for i, target in enumerate(targets):
            current_target = targets[i]
            if current_target['name'].lower() == self.targetName:
                json_layers = current_target['webmap']
                for j, layers in enumerate(json_layers):
                    current_layer = json_layers[j]
                    if current_layer['type'] == 'WMS':
                        if current_layer['transparent'] == 'false':
                            self.map_layers['base'].append(current_layer)
                        else:
                            self.map_layers['overlays'].append(current_layer)

        
        for layer in self.map_layers['base']:
            if layer['projection'] == 'cylindrical':
                wms_layer = WMSLayer(
                    url='https://planetarymaps.usgs.gov/cgi-bin/mapserv?map=' + layer['map'],
                    layers= layer['layer'],
                    name=layer['displayname'],
                    crs='EPSG4326',
                    base=True
                )
                self.base_layers.append(wms_layer)

    def handle_interaction(self, **kwargs):
        if kwargs.get('type') == 'mousemove':
            coords = kwargs.get('coordinates')

            lat = coords[0]
            lng = coords[1]
        
            if lng < 0:
                if Math.floor(lng/180)%2 == 0:
                    lng = 180 - (abs(lng) % 180);
                else:
                    lng = (lng % 180) - 180
            else:
                if Math.floor(lng/180)%2 == 0:
                    lng = lng % 180
                else:
                    lng = -180 + (abs(lng) % 180)
        
            if self.longitudeRange.value == "0 to 360":
                lng += 180;
            
        
            if self.latDomain.value == "Planetographic":
                convertedLatitude = Math.radians(lat)
                convertedLatitude = Math.atan(((self.dMajorRadius / self.dMinorRadius)**2) * (Math.tan(convertedLatitude)))
                convertedLatitude = Math.degrees(convertedLatitude);
                lat = convertedLatitude;
        
                
            if self.longitudeDirection.value == "Positive West":
                if(self.longitudeRange.value == "-180 to 180"):
                    lng *= -1
                else:
                    lng = Math.fabs(lng - 360)
        
            self.latLonLabel.value = "Lat, Lon: "+ str(round(lat, 2)) + ", " + str(round(lng, 2))

    def Create_Map(self):
        self.planet_map = Map(layers=tuple(self.base_layers), center=(0, 0), zoom=1, crs='EPSG4326')
    
        draw_control = DrawControl()
        draw_control.polyline =  {
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
        
        self.planet_map.add_control(draw_control)
        self.planet_map.add_control(LayersControl(position='topright'))
        self.planet_map.on_interaction(self.handle_interaction)
        range_control = WidgetControl(widget=self.longitudeRange, position='topright')
        lat_control = WidgetControl(widget=self.latDomain, position='topright')
        direction_control = WidgetControl(widget=self.longitudeDirection, position='topright')
        label_control = WidgetControl(widget=self.latLonLabel, position='bottomright')
        self.planet_map.add_control(range_control)
        self.planet_map.add_control(lat_control)
        self.planet_map.add_control(direction_control)
        self.planet_map.add_control(label_control)
        self.planet_map.add_control(FullScreenControl(position='bottomleft'))

    def Display_Map(self):
        display(self.drawLabel)
        #display(self.longitudeDirection)
        #display(self.longitudeRange)
        #display(self.latDomain)
        #display(self.latLonLabel)
        display(self.planet_map)
        display(self.wktTextBox)
        display(self.wktButton)

    def Add_Rectangle(self, point1, point2):
        rectangle = Rectangle(bounds=(point1, point2))
        self.planet_map.add_layer(rectangle)

    def Add_Circle(self, point, radius):
        circle = Circle()
        circle.location = point
        circle.radius = radius
        circle.color = "yellow"
        circle.fill_color = "yellow"
        self.planet_map.add_layer(circle)

    def Add_marker(self, point):
        marker = Marker(location=point, draggable=False)
        self.planet_map.add_layer(marker)

    def Add_polygon(self, points):
        polygon = Polygon(
            locations=points,
            color="green",
            fill_color="green"
            )
        self.planet_map.add_layer(polygon)

    def add_wkt(self, wktString):
        try:
            g1 = shapely.wkt.loads(wktString)
            g2 = geojson.Feature(geometry=g1, properties={})
            geo_json = GeoJSON(data=g2, style = {'color': 'yellow', 'opacity':1, 'weight':1.9, 'fillOpacity':0.5})
            self.planet_map.add_layer(geo_json)
        except:
            self.wktTextBox.value = "Invalid WKT String"
            
        

    def handle_draw(self, *args, **kwargs):
        """Do something with the GeoJSON when it's drawn on the map"""
        geo_json = kwargs.get('geo_json')
        data = geo_json['geometry']
        geom = geo.shape(data)
        self.wktTextBox.value = geom.wkt

    def handle_WKT_button(self, *args, **kwargs):
        self.add_wkt(self.wktTextBox.value)
        

        

    
    

        
        

        

