import unittest
import ipywidgets as widgets
import CartoCosmos as l

class planetary_gui_tests(unittest.TestCase):
    def setUp(self):
        """Call before every test case."""
        self.gui = l.planetary_gui()

    def tearDown(self):
        self.gui = None

    def testing_wkt_button(self):
        """Checking the WKT_button Widget has all the correct information'"""
        wkt_button = self.gui.get_wkt_button()
        self.assertEqual(wkt_button.description, "Draw")
        self.assertEqual(wkt_button.tooltip, "Draw WKT object")

    def testing_wkt_text_box(self):
        """Checking the WKT_text_box Widget has all the correct information'"""
        text_box = self.gui.get_wkt_text_box()
        self.assertEqual(text_box.description, "WKT String:")
        self.assertEqual(text_box.placeholder, "Type something")
        self.assertEqual(text_box.value, "")

    def testing_longitude_direction(self):
        """Checking the WKT_longitude_direction Widget has all the correct information'"""
        lat_lon_button = self.gui.get_longitude_direction()
        self.assertEqual(lat_lon_button.options, ('Positive East', 'Positive West'))
        self.assertEqual(lat_lon_button.tooltips, ('Longitude increasing east', 'Longitude Increasing West'))
        self.assertEqual(lat_lon_button.description, "")

    def testing_draw_label(self):
        """Checking the draw_label Widget has all the correct information'"""
        label = self.gui.get_draw_label()
        assert label is not None

    def testing_lat_lon_label(self):
        """Checking the lat_lon_label Widget has all the correct information'"""
        label = self.gui.get_lat_lon_label()
        assert label is not None

    def testing_lat_domain(self):
        """Checking the WKT_lat_domain Widget has all the correct information'"""
        lat_domain = self.gui.get_lat_domain()
        self.assertEqual(lat_domain.options, ('Planetocentric', 'Planetographic'))
        self.assertEqual(lat_domain.tooltips, ('Regular Latitude', 'Tangent Latitude'))
        self.assertEqual(lat_domain.description, "")

    def testing_longitude_range(self):
        """Checking the WKT_longitude_range Widget has all the correct information'"""
        longitude_range = self.gui.get_longitude_range()
        self.assertEqual(longitude_range.options, ('0 to 360', '-180 to 180'))
        self.assertEqual(longitude_range.tooltips, ('Longitude from 0 to 360', 'Longitude from -180 to 180'))
        self.assertEqual(longitude_range.description, "")

if __name__ == "__main__":
    unittest.main() # run all tests