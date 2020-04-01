import ipywidgets as widgets

class planetary_gui:

    """ Creates the GUI elements needed for the Planetary Maps. """
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
