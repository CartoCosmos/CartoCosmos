


var geojsonFeature = {
  "type": "Feature",
  "stac_version": "1.0.0",
  "id": "F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_DEM",
  "properties": {
    "title": "Ames Stereo Pipeline Derived 20mpp Content Camera DTM and Ortho Image; Mars; F21_044106_1800_XN_00N220W, K01_053679_1800_XI_00N220W",
    "description": "This is a digital terrain model (DTM) extracted from Context Camera (CTX) stereo images from the Mars Reconnaissance Orbiter mission. This data product is a DTM from stereo images acquired at approximately 6 meters/pixel resolution, which allows an output DTM resolution of 20 meters/pixel. The DTM was generated using the Ames Stereo Pipeline software (https://github.com/NeoGeographyToolkit/StereoPipeline)and using automated methods. This DTM was generated for general and public use, including scientific and engineering purposes. This DTM also serves as a foundation for ortho-projection.",
    "missions": [
      "Mars Reconnaissance Orbiter"
    ],
    "instruments": [
      "Context Camera (CTX)"
    ],
    "gsd": 20,
    "license": "PDDL-1.0",
    "proj:epsg": null,
    "proj:wkt2": "\"PROJCS[\\\"unnamed\\\",GEOGCS[\\\"D_MARS\\\",DATUM[\\\"D_MARS\\\",SPHEROID[\\\"MARS\\\",3396000,0]],PRIMEM[\\\"Reference Meridian\\\",0],UNIT[\\\"degree\\\",0.0174532925199433,AUTHORITY[\\\"EPSG\\\",\\\"9122\\\"]]],PROJECTION[\\\"Orthographic\\\"],PARAMETER[\\\"latitude_of_origin\\\",0.0833215],PARAMETER[\\\"central_meridian\\\",139.973],PARAMETER[\\\"false_easting\\\",0],PARAMETER[\\\"false_northing\\\",0],UNIT[\\\"metre\\\",1,AUTHORITY[\\\"EPSG\\\",\\\"9001\\\"]],AXIS[\\\"Easting\\\",EAST],AXIS[\\\"Northing\\\",NORTH]]\"",
    "proj:bbox": [
      139.589401851736,
      -1.27908762568909,
      140.360088687498,
      1.44342047421533
    ],
    "proj:centroid": {
      "lat": 0.08216642426312006,
      "lon": 139.974745269617
    },
    "proj:shape": [
      8054,
      2263
    ],
    "proj:transform": [
      -22550,
      20,
      0,
      80550,
      0,
      -20
    ],
    "cube:dimensions": {
      "x": {
        "type": "spatial",
        "axis": "x",
        "extent": [
          139.589401851736,
          140.360088687498
        ]
      },
      "y": {
        "type": "spatial",
        "axis": "y",
        "extent": [
          -1.27908762568909,
          1.44342047421533
        ]
      }
    },
    "ssys:targets": [
      "Mars"
    ],
    "datetime": "2021-08-16T00:00:00Z"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          139.589401851736,
          -1.27908762568909
        ],
        [
          139.589401851736,
          1.44342047421533
        ],
        [
          140.360088687498,
          1.44342047421533
        ],
        [
          140.360088687498,
          -1.27908762568909
        ],
        [
          139.589401851736,
          -1.27908762568909
        ]
      ]
    ]
  },
  "links": [
    {
      "rel": "self",
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_DEM.json",
      "type": "application/json"
    },
    {
      "rel": "parent",
      "href": "https://asc-mars.s3.us-west-2.amazonaws.com/ctx_dtms/collection.json",
      "type": "application/json"
    },
    {
      "rel": "root",
      "href": "https://asc-mars.s3.us-west-2.amazonaws.com/catalog.json",
      "type": "application/json"
    },
    {
      "rel": "collection",
      "href": "https://asc-mars.s3.us-west-2.amazonaws.com/ctx_dtms/collection.json",
      "type": "application/json"
    }
  ],
  "assets": {
    "thumbnail": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_DEM.jpg",
      "type": "image/jpeg",
      "title": "DEM Thumbnail",
      "key": "thumbnail",
      "roles": [
        "thumbnail"
      ]
    },
    "dem": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_DEM.tif",
      "type": "image/tiff; application=geotiff; profile=cloud-optimized",
      "title": "DEM",
      "key": "dem",
      "roles": [
        "data"
      ]
    },
    "hillshade": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_HILLSHADE.tif",
      "type": "image/tiff; application=geotiff; profile=cloud-optimized",
      "title": "Hillshade",
      "key": "hillshade",
      "roles": [
        "data"
      ]
    },
    "ortho image": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_ORTHO.tif",
      "type": "image/tiff; application=geotiff; profile=cloud-optimized",
      "title": "Orthoimage",
      "key": "ortho image",
      "roles": [
        "data"
      ]
    },
    "fgdc_metadata": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_DEM.xml",
      "type": "application/xml",
      "title": "FGDC Metadata",
      "key": "fgdc_metadata",
      "roles": [
        "metadata"
      ]
    },
    "qa_metric": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/qa_metrics.txt",
      "type": "text/plain",
      "title": "Quality Assurance Metrics",
      "key": "qa_metric",
      "roles": [
        "metadata"
      ]
    },
    "intersection_err": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W_IntersectionErr.tif",
      "type": "image/tiff; application=geotiff",
      "title": "ASP generated intersection error raster",
      "key": "intersection_err",
      "roles": [
        "metadata",
        "data-mask"
      ]
    },
    "provenance": {
      "href": "https://asc-mars.s3-us-west-2.amazonaws.com/ctx_dtms/F21_044106_1800_XN_00N220W__K01_053679_1800_XI_00N220W/provenance.txt",
      "type": "text/plain",
      "title": "Processing steps in ISIS and ASP used to generate the data product",
      "key": "provenance",
      "roles": [
        "metadata"
      ]
    }
  },
  "bbox": [
    139.589401851736,
    -1.27908762568909,
    140.360088687498,
    1.44342047421533
  ],
  "stac_extensions": [
    "https://stac-extensions.github.io/projection/v1.0.0/schema.json",
    "https://stac-extensions.github.io/datacube/v1.0.0/schema.json",
    "https://raw.githubusercontent.com/thareUSGS/ssys/main/json-schema/schema.json"
  ],
  "collection": "ctx_dtms"
};

export { geojsonFeature };
