"""System module."""
import unittest
import os
import sys

sys.path.append(os.path.abspath('../'))

class TestCaseforApp(unittest.TestCase):
    """A dummy docstring."""
    def test_ifuppercase(self):
        """A dummy docstring."""
        self.assertTrue('KRU'.isupper())
        self.assertFalse('kru'.isupper())
        self.assertFalse('kRu'.isupper())

    def test_iflowercase(self):
        """A dummy docstring."""
        self.assertTrue('ray'.islower())
        self.assertFalse('RAY'.islower())
        self.assertFalse('RAy'.islower())

    def test_username_when_joining(self):
        """A dummy docstring."""
        joinedperson = "Username has joined"
        self.assertEqual(joinedperson, "Username has joined")
        self.assertNotEqual(joinedperson, "Username has not joined")
        self.assertNotEqual(joinedperson, "Username has joined again")


if __name__ == "__main__":
    unittest.main()
