from setuptools import setup, find_packages

with open("README") as f:
    long_description = f.read()

setup (
    name = 'CartoCosmos',
    version = '1.3',
    description = 'Virtual planetary mapping',
    long_description = long_description,
    author = 'CartoComos Development Team',
    author_email = '',
    url = 'https://github.com/CartoCosmos/CartoCosmos',
    packages = find_packages(),
    install_requires = [
        'ipyleaflet',
        'ipywidgets',
        'geojson',
        'Shapely'
    ],
    include_package_data=True,
)