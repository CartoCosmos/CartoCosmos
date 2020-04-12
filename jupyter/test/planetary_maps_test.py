import unittest
import CartoCosmos as l

class planetary_map_tests(unittest.TestCase):
    def setUp(self):
        """Call before every test case."""
        self.map = l.planetary_maps("")

    def tearDown(self):
        self.map = None

    def testing_map_object(self):
        """Checking the map actually created an object'"""
        assert self.map is not None

if __name__ == "__main__":
    unittest.main() # run all tests