from setuptools import setup, find_packages

with open("README") as f:
    long_description = f.read()

setup (
    name = 'CartoCosmos',
    version = '1.0.1',
    description = 'Virtual planetary mapping',
    long_description = long_description,
    author = 'CartoComos Development Team',
    author_email = '',
    url = 'https://github.com/CartoCosmos/CartoCosmos',
    packages = find_packages(),
    data_files=[('geoServerLayers', ['CartoCosmos/geoServerLayers.json'])],
    classifiers=[
                "Programming Language :: Python :: 3",
                "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
    install_requires = [
        'ipyleaflet',
        'ipywidgets',
        'geojson',
        'Shapely'
    ],
    include_package_data=True,
)
