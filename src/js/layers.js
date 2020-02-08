export const MY_JSON_MAPS = {
  targets: [
    {
      name: "CERES",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "470",
      baxisradius: "470",
      caxisradius: "470",
      webmap: [
        {
          displayname: "Dawn Ceres FC HAMO NPole",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/ceres_npole.map",
          layer: "Ceres_FC_HAMO_NPole",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-940030",
            right: "940030",
            top: "940030",
            bottom: "-940030"
          },
          primary: "false",
          citation: "NASA/JPL-Caltech/UCLA/MPS/DLR/IDA (Thomas Roatsch)",
          notes: "from DLR"
        },
        {
          displayname: "Dawn Ceres FC HAMO SPole",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/ceres_spole.map",
          layer: "Ceres_FC_HAMO_SPole",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-940030",
            right: "940030",
            top: "940030",
            bottom: "-940030"
          },
          primary: "false",
          citation: "NASA/JPL-Caltech/UCLA/MPS/DLR/IDA (Thomas Roatsch)",
          notes: "from DLR"
        }
      ]
    },
    {
      name: "PLUTO",
      system: "PLUTO",
      naif: "999",
      aaxisradius: "1188",
      baxisradius: "1188",
      caxisradius: "1188",
      webmap: [
        {
          displayname: "New Horizons Pluto Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/pluto/pluto_simp_cyl.map",
          layer: "NEWHORIZONS_PLUTO_MOSAIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/APL/SwRI/LPI",
          notes: "based on New Horizons"
        },
        {
          displayname: "New Horizons Pluto Colorized Shaded Relief",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/pluto/pluto_simp_cyl.map",
          layer: "NEWHORIZONS_PLUTO_ClrSHADE",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "NASA/APL/SwRI/LPI",
          notes: "based on New Horizons"
        }
      ]
    },
    {
      name: "CHARON",
      system: "PLUTO",
      naif: "901",
      aaxisradius: "606",
      baxisradius: "606",
      caxisradius: "606",
      webmap: [
        {
          displayname: "New Horizons Charon Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/pluto/charon_simp_cyl.map",
          layer: "NEWHORIZONS_CHARON_MOSAIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/APL/SwRI/LPI",
          notes: "based on New Horizons"
        },
        {
          displayname: "New Horizons Charon Colorized Shaded Relief",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/pluto/charon_simp_cyl.map",
          layer: "NEWHORIZONS_CHARON_ClrSHADE",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "NASA/APL/SwRI/LPI",
          notes: "based on New Horizons"
        }
      ]
    },
    {
      name: "MIMAS",
      system: "SATURN",
      naif: "601",
      aaxisradius: "198.2",
      baxisradius: "198.2",
      caxisradius: "198.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        },
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        },
        {
          displayname: "Cassini Global Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_simp_cyl.map",
          layer: "CASSINI_MIMAS_MOSAIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "DLR/NASA/JPL/SSI",
          notes: "based on Cassini"
        },
        {
          displayname: "Cassini Global Mosaic",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_npole.map",
          layer: "CASSINI_MIMAS_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-396407.762",
            right: "396191.56",
            top: "396191.56",
            bottom: "-396407.762"
          },
          primary: "false",
          citation: "DLR/NASA/JPL/SSI",
          notes: "based on Cassini"
        },
        {
          displayname: "Cassini Global Mosaic",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_spole.map",
          layer: "CASSINI_MIMAS_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-396407.762",
            right: "396191.56",
            top: "396191.56",
            bottom: "-396407.762"
          },
          primary: "false",
          citation: "DLR/NASA/JPL/SSI",
          notes: "based on Cassini"
        }
      ]
    },
    {
      name: "JUPITER",
      system: "JUPITER",
      naif: "599",
      aaxisradius: "71492",
      baxisradius: "71492",
      caxisradius: "66854",
      webmap: [
        {
          displayname: "CASSINI (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/jupiter_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "TITAN",
      system: "SATURN",
      naif: "606",
      aaxisradius: "2575",
      baxisradius: "2575",
      caxisradius: "2575",
      webmap: [
        {
          displayname: "Cassini North Pole Mosaic",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "http://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_npole.map",
          layer: "CASSINI_TITAN_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-5149902.291",
            right: "5149902.291",
            top: "5149902.291",
            bottom: "-5149902.291"
          },
          primary: "false",
          citation: "NASA/JPL/USGS",
          notes: "based on Cassini"
        },
        {
          displayname: "Cassini South Pole Mosaic",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "http://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_spole.map",
          layer: "CASSINI_TITAN_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-5149902.291",
            right: "5149902.291",
            top: "5149902.291",
            bottom: "-5149902.291"
          },
          primary: "false",
          citation: "NASA/JPL/USGS",
          notes: "based on Cassini"
        }
      ]
    },
    {
      name: "MATHILDE",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "26.5",
      baxisradius: "26.5",
      caxisradius: "26.5",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "ADRASTEA",
      system: "JUPITER",
      naif: "515",
      aaxisradius: "8.2",
      baxisradius: "8.2",
      caxisradius: "8.2",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "MOLA North Grayscale (MOLA) ",
          projection: "north-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_npole.map",
          layer: "MOLA_bw_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        }
      ]
    },
    {
      name: "DEIMOS",
      system: "MARS",
      naif: "402",
      aaxisradius: "6.2",
      baxisradius: "6.2",
      caxisradius: "6.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/deimos_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MIMAS",
      system: "SATURN",
      naif: "601",
      aaxisradius: "198.2",
      baxisradius: "198.2",
      caxisradius: "198.2",
      webmap: [
        {
          displayname: "Cassini/Voyager (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/mimas_simp_cyl.map",
          layer: "CASSINI_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "SATURN",
      system: "SATURN",
      naif: "699",
      aaxisradius: "60268",
      baxisradius: "60268",
      caxisradius: "54364",
      webmap: [
        {
          displayname: "CASSINI (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/saturn_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "Bjorn Jonsson/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "TETHYS",
      system: "SATURN",
      naif: "603",
      aaxisradius: "536.3",
      baxisradius: "536.3",
      caxisradius: "536.3",
      webmap: [
        {
          displayname: "Cassini Images (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/tethys_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "TITAN",
      system: "SATURN",
      naif: "606",
      aaxisradius: "2575",
      baxisradius: "2575",
      caxisradius: "2575",
      webmap: [
        {
          displayname: "Cassini Images (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "PHOEBE",
      system: "SATURN",
      naif: "609",
      aaxisradius: "106.5",
      baxisradius: "106.5",
      caxisradius: "106.5",
      webmap: [
        {
          displayname: "Cassinin Images (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/phoebe_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "IAPETUS",
      system: "SATURN",
      naif: "608",
      aaxisradius: "736",
      baxisradius: "736",
      caxisradius: "736",
      webmap: [
        {
          displayname: "Cassinin/Voyager (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/iapetus_simp_cyl.map",
          layer: "CASSINI_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "DIONE",
      system: "SATURN",
      naif: "604",
      aaxisradius: "562.5",
      baxisradius: "562.5",
      caxisradius: "562.5",
      webmap: [
        {
          displayname: "Cassini-Voyager (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/dione_simp_cyl.map",
          layer: "CASSINI_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Clementine - UV/VIS North v2 (ULCN 2005) ",
          projection: "north-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_npole.map",
          layer: "uv_north_v2",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Clementine - UV/VIS North warp (ULCN 2005) ",
          projection: "north-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_npole.map",
          layer: "uv_north_warp",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "UMBRIEL",
      system: "URANUS",
      naif: "702",
      aaxisradius: "584.7",
      baxisradius: "584.7",
      caxisradius: "584.7",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "MESSENGER over Mariner (Preliminary MESSENGER)",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_spole.map",
          layer: "MESSENGER_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "false",
          citation: "ASU/USGS/NASA",
          notes: " "
        },
        {
          displayname: "MESSENGER over Mariner (Preliminary MESSENGER)",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_npole.map",
          layer: "MESSENGER_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "false",
          citation: "ASU/USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Clementine - UV/VIS South v2 (ULCN 2005) ",
          projection: "south-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_spole.map",
          layer: "uv_south_v2",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Clementine - UV/VIS South warp (ULCN 2005) ",
          projection: "south-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_spole.map",
          layer: "uv_south_warp",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Clementine - UV/VIS v2 (ULCN 2005) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "uv_v2",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Clementine - UV/VIS warp (ULCN 2005) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "uv_warp",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Clementine/UV Lunar Orbiter (ULCN 2005) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "uv_lo",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "ENCELADUS",
      system: "SATURN",
      naif: "602",
      aaxisradius: "252.1",
      baxisradius: "252.1",
      caxisradius: "252.1",
      webmap: [
        {
          displayname: "Enceladus (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/enceladus_simp_cyl.map",
          layer: "CASSINI",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "HYPERION",
      system: "SATURN",
      naif: "607",
      aaxisradius: "135",
      baxisradius: "135",
      caxisradius: "135",
      webmap: [
        {
          displayname: "Galileo (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/hyperion_simp_cyl.map",
          layer: "VOYAGER2",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "Philip Stooke/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "IO",
      system: "JUPITER",
      naif: "501",
      aaxisradius: "1821.46",
      baxisradius: "1821.46",
      caxisradius: "1821.46",
      webmap: [
        {
          displayname: "Galileo SSI Color (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_simp_cyl.map",
          layer: "SSI_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Galileo SSI Grayscale (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_simp_cyl.map",
          layer: "SSI_bw",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "CALLISTO",
      system: "JUPITER",
      naif: "504",
      aaxisradius: "2409.3",
      baxisradius: "2409.3",
      caxisradius: "2409.3",
      webmap: [
        {
          displayname: "Galileo SSI/Voyager (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/callisto_simp_cyl.map",
          layer: "GALILEO_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "EUROPA",
      system: "JUPITER",
      naif: "502",
      aaxisradius: "1562.09",
      baxisradius: "1562.09",
      caxisradius: "1562.09",
      webmap: [
        {
          displayname: "Galileo SSI/Voyager (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/europa_simp_cyl.map",
          layer: "GALILEO_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "GANYMEDE",
      system: "JUPITER",
      naif: "503",
      aaxisradius: "2632.34",
      baxisradius: "2632.34",
      caxisradius: "2632.34",
      webmap: [
        {
          displayname: "Galileo SSI/Voyager (Unknown) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/ganymede_simp_cyl.map",
          layer: "GALILEO_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "IO",
      system: "JUPITER",
      naif: "501",
      aaxisradius: "1821.46",
      baxisradius: "1821.46",
      caxisradius: "1821.46",
      webmap: [
        {
          displayname: "Galileo SSI/Voyager Grayscale (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_simp_cyl.map",
          layer: "SSI_VGR_bw",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Galileo SSI/Voyager North Color Merge",
          projection: "north-polar stereographic",
          controlnet: "Voyager/Galileo SSI",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_npole.map",
          layer: "SSI_VGR_color_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1149008.5",
            right: "1148397",
            top: "1149008.5",
            bottom: "-1148397"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Galileo SSI/Voyager North Grayscale",
          projection: "north-polar stereographic",
          controlnet: "Voyager/Galileo SSI",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_npole.map",
          layer: "SSI_VGR_bw_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1149008.5",
            right: "1148397",
            top: "1149008.5",
            bottom: "-1148397"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Galileo SSI/Voyager South Color Merge",
          projection: "south-polar stereographic",
          controlnet: "Voyager/Galileo SSI",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_spole.map",
          layer: "SSI_VGR_color_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1149008.5",
            right: "1148397",
            top: "1149008.5",
            bottom: "-1148397"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Galileo SSI/Voyager South Grayscale",
          projection: "south-polar stereographic",
          controlnet: "Voyager/Galileo SSI",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_spole.map",
          layer: "SSI_VGR_bw_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1149008.5",
            right: "1148397",
            top: "1149008.5",
            bottom: "-1148397"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "DACTYL",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "",
      baxisradius: "",
      caxisradius: "",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "EROS",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "17",
      baxisradius: "5.5",
      caxisradius: "5.5",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "GASPRA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "6.1",
      baxisradius: "6.1",
      caxisradius: "6.1",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "IDA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "15.65",
      baxisradius: "15.65",
      caxisradius: "15.65",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "ITOKAWA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "0.535",
      baxisradius: "0.294",
      caxisradius: "0.209",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "AITNE",
      system: "JUPITER",
      naif: "531",
      aaxisradius: "",
      baxisradius: "",
      caxisradius: "",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "AMALTHEA",
      system: "JUPITER",
      naif: "505",
      aaxisradius: "83.5",
      baxisradius: "83.5",
      caxisradius: "83.5",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "THEBE",
      system: "JUPITER",
      naif: "514",
      aaxisradius: "49.3",
      baxisradius: "49.3",
      caxisradius: "49.3",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "PROTEUS",
      system: "NEPTUNE",
      naif: "808",
      aaxisradius: "208",
      baxisradius: "208",
      caxisradius: "208",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "TRITON",
      system: "NEPTUNE",
      naif: "801",
      aaxisradius: "1352.6",
      baxisradius: "1352.6",
      caxisradius: "1352.6",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "EPIMETHEUS",
      system: "SATURN",
      naif: "611",
      aaxisradius: "58.1",
      baxisradius: "58.1",
      caxisradius: "58.1",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "JANUS",
      system: "SATURN",
      naif: "610",
      aaxisradius: "89.5",
      baxisradius: "89.5",
      caxisradius: "89.5",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "ARIEL",
      system: "URANUS",
      naif: "701",
      aaxisradius: "578.9",
      baxisradius: "578.9",
      caxisradius: "578.9",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "MIRANDA",
      system: "URANUS",
      naif: "705",
      aaxisradius: "235.8",
      baxisradius: "235.8",
      caxisradius: "235.8",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "OBERON",
      system: "URANUS",
      naif: "704",
      aaxisradius: "761.4",
      baxisradius: "761.4",
      caxisradius: "761.4",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "PUCK",
      system: "URANUS",
      naif: "715",
      aaxisradius: "77",
      baxisradius: "77",
      caxisradius: "77",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        },
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "LROC LOLA Grayscale Shade (LOLA) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "LOLA_bw",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "GODDARD",
          notes: " "
        },
        {
          displayname: "LROC LOLA North Color Shade (LOLA) ",
          projection: "north-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_npole.map",
          layer: "LOLA_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "GODDARD",
          notes: " "
        },
        {
          displayname: "LROC LOLA South Color Shade (LOLA) ",
          projection: "south-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_spole.map",
          layer: "LOLA_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "GODDARD",
          notes: " "
        },
        {
          displayname: "Lunar Orbiter (ULCN 2005) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "LO",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Lunar Orbiter North (ULCN 2005) ",
          projection: "north-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_npole.map",
          layer: "lo_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Lunar Orbiter South (ULCN 2005) ",
          projection: "south-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_spole.map",
          layer: "lo_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "EARTH",
      system: "EARTH",
      naif: "399",
      aaxisradius: "6378.14",
      baxisradius: "6378.14",
      caxisradius: "6356.75",
      webmap: [
        {
          displayname: "MODIS Earth (WGS84) ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/earth_simp_cyl.map",
          layer: "MODIS",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "MOLA Color (MDIM 2.1) ",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MOLA_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        },
        {
          displayname: "MOLA Grayscale (MDIM 2.1) ",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MOLA_bw",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        },
        {
          displayname: "MOLA North Color (MOLA) ",
          projection: "north-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_npole.map",
          layer: "MOLA_color_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "LROC LOLA Color Shade (LOLA) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "LOLA_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "ASU/NASA",
          notes: " "
        },
        {
          displayname: "LROC WAC (LOLA) ",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "LROC_WAC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "ASU/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "Mariner over MESSENGER (Preliminary MESSENGER)",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_spole.map",
          layer: "MARINER_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Mariner over MESSENGER (Preliminary MESSENGER)",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_npole.map",
          layer: "MARINER_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "NEPTUNE",
      system: "NEPTUNE",
      naif: "899",
      aaxisradius: "24764",
      baxisradius: "24764",
      caxisradius: "24341",
      webmap: [
        {
          displayname: "Lat/Lon Grid Lines",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/generic/generic_simp_cyl.map",
          layer: "GENERIC",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "",
          notes: " "
        }
      ]
    },
    {
      name: "VENUS",
      system: "VENUS",
      naif: "299",
      aaxisradius: "6051.8",
      baxisradius: "6051.8",
      caxisradius: "6051.8",
      webmap: [
        {
          displayname: "FMAP Left-look (Magellan)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_simp_cyl.map",
          layer: "MAGELLAN",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "C3-MDIR Colorized (Magellan)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_simp_cyl.map",
          layer: "MAGELLAN_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "C3-MDIR Colorized Topography (Magellan)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_simp_cyl.map",
          layer: "MAGELLAN_topography",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "MOLA South Color (MOLA) ",
          projection: "south-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_spole.map",
          layer: "MOLA_color_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        },
        {
          displayname: "MOLA South Grayscale (MOLA) ",
          projection: "south-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_spole.map",
          layer: "MOLA_bw_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "false",
          citation: "Goddard/USGS",
          notes: " "
        }
      ]
    },
    {
      name: "RHEA",
      system: "SATURN",
      naif: "605",
      aaxisradius: "764.1",
      baxisradius: "764.1",
      caxisradius: "764.1",
      webmap: [
        {
          displayname: "Rhea (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/rhea_simp_cyl.map",
          layer: "CASSINI_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL/Space Science Institute",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "VIKING (MDIM 2.0) ",
          projection: "cylindrical",
          controlnet: "MDIM2.0",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MDIM20",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "DEIMOS",
      system: "MARS",
      naif: "402",
      aaxisradius: "6.2",
      baxisradius: "6.2",
      caxisradius: "6.2",
      webmap: [
        {
          displayname: "Viking (Unknown ",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/deimos_simp_cyl.map",
          layer: "VIKING",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "Philip Stooke/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "Viking North (MDIM 2.1) ",
          projection: "north-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_npole.map",
          layer: "MDIM21_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        },
        {
          displayname: "Viking South (MDIM 2.1) ",
          projection: "south-polar stereographic",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_spole.map",
          layer: "MDIM21_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-2357032",
            right: "2357032",
            top: "2357032",
            bottom: "-2357032"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "DIONE",
      system: "SATURN",
      naif: "604",
      aaxisradius: "562.5",
      baxisradius: "562.5",
      caxisradius: "562.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/dione_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IO",
      system: "JUPITER",
      naif: "501",
      aaxisradius: "1821.46",
      baxisradius: "1821.46",
      caxisradius: "1821.46",
      webmap: [
        {
          displayname: "Galileo SSI/Voyager Color Merge (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_simp_cyl.map",
          layer: "SSI_VGR_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "VIKING (MDIM 2.1) ",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MDIM21",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "ADRASTEA",
      system: "JUPITER",
      naif: "515",
      aaxisradius: "8.2",
      baxisradius: "8.2",
      caxisradius: "8.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/adrastea_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "Mariner over MESSENGER (Preliminary MESSENGER)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl.map",
          layer: "MARINER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "AITNE",
      system: "JUPITER",
      naif: "531",
      aaxisradius: "",
      baxisradius: "",
      caxisradius: "",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/aitne_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "AMALTHEA",
      system: "JUPITER",
      naif: "505",
      aaxisradius: "83.5",
      baxisradius: "83.5",
      caxisradius: "83.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/amalthea_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "LROC WAC North (LOLA) ",
          projection: "north-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_npole.map",
          layer: "LRO_WAC_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "true",
          citation: "ASU/NASA",
          notes: " "
        },
        {
          displayname: "LROC WAC South (LOLA) ",
          projection: "south-polar stereographic",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_spole.map",
          layer: "LRO_WAC_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-931032.356",
            right: "931067.644",
            top: "931067.644",
            bottom: "-931067.644"
          },
          primary: "true",
          citation: "ASU/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "TITAN",
      system: "SATURN",
      naif: "606",
      aaxisradius: "2575",
      baxisradius: "2575",
      caxisradius: "2575",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "CALLISTO",
      system: "JUPITER",
      naif: "504",
      aaxisradius: "2409.3",
      baxisradius: "2409.3",
      caxisradius: "2409.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/callisto_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EUROPA",
      system: "JUPITER",
      naif: "502",
      aaxisradius: "1562.09",
      baxisradius: "1562.09",
      caxisradius: "1562.09",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/europa_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "GANYMEDE",
      system: "JUPITER",
      naif: "503",
      aaxisradius: "2632.34",
      baxisradius: "2632.34",
      caxisradius: "2632.34",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/ganymede_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IO",
      system: "JUPITER",
      naif: "501",
      aaxisradius: "1821.46",
      baxisradius: "1821.46",
      caxisradius: "1821.46",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "THEBE",
      system: "JUPITER",
      naif: "514",
      aaxisradius: "49.3",
      baxisradius: "49.3",
      caxisradius: "49.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/thebe_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "DEIMOS",
      system: "MARS",
      naif: "402",
      aaxisradius: "6.2",
      baxisradius: "6.2",
      caxisradius: "6.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/deimos_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PHOBOS",
      system: "MARS",
      naif: "401",
      aaxisradius: "11.08",
      baxisradius: "11.08",
      caxisradius: "11.08",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/phobos_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "NEPTUNE",
      system: "NEPTUNE",
      naif: "899",
      aaxisradius: "24764",
      baxisradius: "24764",
      caxisradius: "24341",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/neptune_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PROTEUS",
      system: "NEPTUNE",
      naif: "808",
      aaxisradius: "208",
      baxisradius: "208",
      caxisradius: "208",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/proteus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TRITON",
      system: "NEPTUNE",
      naif: "801",
      aaxisradius: "1352.6",
      baxisradius: "1352.6",
      caxisradius: "1352.6",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/triton_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ENCELADUS",
      system: "SATURN",
      naif: "602",
      aaxisradius: "252.1",
      baxisradius: "252.1",
      caxisradius: "252.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/enceladus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EPIMETHEUS",
      system: "SATURN",
      naif: "611",
      aaxisradius: "58.1",
      baxisradius: "58.1",
      caxisradius: "58.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/epimetheus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PHOBOS",
      system: "MARS",
      naif: "401",
      aaxisradius: "11.08",
      baxisradius: "11.08",
      caxisradius: "11.08",
      webmap: [
        {
          displayname: "Viking (Unknown)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/phobos_simp_cyl.map",
          layer: "VIKING",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "USGS/NASA",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "THEMIS IR Day (MDIM2.1)",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "THEMIS",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "ASU/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "ARIEL",
      system: "URANUS",
      naif: "701",
      aaxisradius: "578.9",
      baxisradius: "578.9",
      caxisradius: "578.9",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/ariel_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "HYPERION",
      system: "SATURN",
      naif: "607",
      aaxisradius: "135",
      baxisradius: "135",
      caxisradius: "135",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/hyperion_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IAPETUS",
      system: "SATURN",
      naif: "608",
      aaxisradius: "736",
      baxisradius: "736",
      caxisradius: "736",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/iapetus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "JANUS",
      system: "SATURN",
      naif: "610",
      aaxisradius: "89.5",
      baxisradius: "89.5",
      caxisradius: "89.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/janus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PHOEBE",
      system: "SATURN",
      naif: "609",
      aaxisradius: "106.5",
      baxisradius: "106.5",
      caxisradius: "106.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/phoebe_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "RHEA",
      system: "SATURN",
      naif: "605",
      aaxisradius: "764.1",
      baxisradius: "764.1",
      caxisradius: "764.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/rhea_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TETHYS",
      system: "SATURN",
      naif: "603",
      aaxisradius: "536.3",
      baxisradius: "536.3",
      caxisradius: "536.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/tethys_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "MDIM2.0",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/var/www/html/mapfiles/mars/mars_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MIRANDA",
      system: "URANUS",
      naif: "705",
      aaxisradius: "235.8",
      baxisradius: "235.8",
      caxisradius: "235.8",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/miranda_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "OBERON",
      system: "URANUS",
      naif: "704",
      aaxisradius: "761.4",
      baxisradius: "761.4",
      caxisradius: "761.4",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/oberon_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PUCK",
      system: "URANUS",
      naif: "715",
      aaxisradius: "77",
      baxisradius: "77",
      caxisradius: "77",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/puck_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        },
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/puck_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "UMBRIEL",
      system: "URANUS",
      naif: "702",
      aaxisradius: "584.7",
      baxisradius: "584.7",
      caxisradius: "584.7",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/umbriel_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "VENUS",
      system: "VENUS",
      naif: "299",
      aaxisradius: "6051.8",
      baxisradius: "6051.8",
      caxisradius: "6051.8",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "DACTYL",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "",
      baxisradius: "",
      caxisradius: "",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/dactyl_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EROS",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "17",
      baxisradius: "5.5",
      caxisradius: "5.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/eros_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "GASPRA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "6.1",
      baxisradius: "6.1",
      caxisradius: "6.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/gaspra_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IDA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "15.65",
      baxisradius: "15.65",
      caxisradius: "15.65",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/ida_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ITOKAWA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "0.535",
      baxisradius: "0.294",
      caxisradius: "0.209",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/itokawa_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MATHILDE",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "26.5",
      baxisradius: "26.5",
      caxisradius: "26.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/mathilde_nomen_wms.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EROS",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "17",
      baxisradius: "5.5",
      caxisradius: "5.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/eros_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "GASPRA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "6.1",
      baxisradius: "6.1",
      caxisradius: "6.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/gaspra_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IDA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "15.65",
      baxisradius: "15.65",
      caxisradius: "15.65",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/ida_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ITOKAWA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "0.535",
      baxisradius: "0.294",
      caxisradius: "0.209",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/itokawa_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MATHILDE",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "26.5",
      baxisradius: "26.5",
      caxisradius: "26.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/mathilde_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ADRASTEA",
      system: "JUPITER",
      naif: "515",
      aaxisradius: "8.2",
      baxisradius: "8.2",
      caxisradius: "8.2",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/adrastea_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "AITNE",
      system: "JUPITER",
      naif: "531",
      aaxisradius: "",
      baxisradius: "",
      caxisradius: "",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/aitne_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "AMALTHEA",
      system: "JUPITER",
      naif: "505",
      aaxisradius: "83.5",
      baxisradius: "83.5",
      caxisradius: "83.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/amalthea_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "CALLISTO",
      system: "JUPITER",
      naif: "504",
      aaxisradius: "2409.3",
      baxisradius: "2409.3",
      caxisradius: "2409.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/callisto_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EUROPA",
      system: "JUPITER",
      naif: "502",
      aaxisradius: "1562.09",
      baxisradius: "1562.09",
      caxisradius: "1562.09",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/europa_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "GANYMEDE",
      system: "JUPITER",
      naif: "503",
      aaxisradius: "2632.34",
      baxisradius: "2632.34",
      caxisradius: "2632.34",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/ganymede_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IO",
      system: "JUPITER",
      naif: "501",
      aaxisradius: "1821.46",
      baxisradius: "1821.46",
      caxisradius: "1821.46",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "Voyager/Galileo SSI",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/io_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "THEBE",
      system: "JUPITER",
      naif: "514",
      aaxisradius: "49.3",
      baxisradius: "49.3",
      caxisradius: "49.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/jupiter/thebe_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PHOBOS",
      system: "MARS",
      naif: "401",
      aaxisradius: "11.08",
      baxisradius: "11.08",
      caxisradius: "11.08",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/phobos_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "NEPTUNE",
      system: "NEPTUNE",
      naif: "899",
      aaxisradius: "24764",
      baxisradius: "24764",
      caxisradius: "24341",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/neptune_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PROTEUS",
      system: "NEPTUNE",
      naif: "808",
      aaxisradius: "208",
      baxisradius: "208",
      caxisradius: "208",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/proteus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TRITON",
      system: "NEPTUNE",
      naif: "801",
      aaxisradius: "1352.6",
      baxisradius: "1352.6",
      caxisradius: "1352.6",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/triton_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "DIONE",
      system: "SATURN",
      naif: "604",
      aaxisradius: "562.5",
      baxisradius: "562.5",
      caxisradius: "562.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/dione_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ENCELADUS",
      system: "SATURN",
      naif: "602",
      aaxisradius: "252.1",
      baxisradius: "252.1",
      caxisradius: "252.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/enceladus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "EPIMETHEUS",
      system: "SATURN",
      naif: "611",
      aaxisradius: "58.1",
      baxisradius: "58.1",
      caxisradius: "58.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/epimetheus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "HYPERION",
      system: "SATURN",
      naif: "607",
      aaxisradius: "135",
      baxisradius: "135",
      caxisradius: "135",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/hyperion_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "IAPETUS",
      system: "SATURN",
      naif: "608",
      aaxisradius: "736",
      baxisradius: "736",
      caxisradius: "736",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/iapetus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "JANUS",
      system: "SATURN",
      naif: "610",
      aaxisradius: "89.5",
      baxisradius: "89.5",
      caxisradius: "89.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/janus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PHOEBE",
      system: "SATURN",
      naif: "609",
      aaxisradius: "106.5",
      baxisradius: "106.5",
      caxisradius: "106.5",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/phoebe_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "RHEA",
      system: "SATURN",
      naif: "605",
      aaxisradius: "764.1",
      baxisradius: "764.1",
      caxisradius: "764.1",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/rhea_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TETHYS",
      system: "SATURN",
      naif: "603",
      aaxisradius: "536.3",
      baxisradius: "536.3",
      caxisradius: "536.3",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/tethys_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TITAN",
      system: "SATURN",
      naif: "606",
      aaxisradius: "2575",
      baxisradius: "2575",
      caxisradius: "2575",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "ARIEL",
      system: "URANUS",
      naif: "701",
      aaxisradius: "578.9",
      baxisradius: "578.9",
      caxisradius: "578.9",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/ariel_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MIRANDA",
      system: "URANUS",
      naif: "705",
      aaxisradius: "235.8",
      baxisradius: "235.8",
      caxisradius: "235.8",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/miranda_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "OBERON",
      system: "URANUS",
      naif: "704",
      aaxisradius: "761.4",
      baxisradius: "761.4",
      caxisradius: "761.4",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/oberon_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "PUCK",
      system: "URANUS",
      naif: "715",
      aaxisradius: "77",
      baxisradius: "77",
      caxisradius: "77",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/puck_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "TITANIA",
      system: "URANUS",
      naif: "703",
      aaxisradius: "788.9",
      baxisradius: "788.9",
      caxisradius: "788.9",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/titania_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "UMBRIEL",
      system: "URANUS",
      naif: "702",
      aaxisradius: "584.7",
      baxisradius: "584.7",
      caxisradius: "584.7",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/umbriel_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "VENUS",
      system: "VENUS",
      naif: "299",
      aaxisradius: "6051.8",
      baxisradius: "6051.8",
      caxisradius: "6051.8",
      webmap: [
        {
          displayname: "Show Feature Names",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WFS",
          url: "https://wms.wr.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_nomen_wfs.map",
          layer: "NOMENCLATURE",
          units: "dd",
          format: "GML",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "IAU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "Mars 5M Quad Charts",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl_quads.map",
          layer: "Mars5M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        },
        {
          displayname: "Mars 2M Quad Charts",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl_quads.map",
          layer: "Mars2M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        },
        {
          displayname: "Mars 500K Quad Charts",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl_quads.map",
          layer: "Mars500K_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Moon 1M Quad Charts",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl_quads.map",
          layer: "Moon1M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "Mercury 5M Quad Charts",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl_quads.map",
          layer: "Mercury5M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        }
      ]
    },
    {
      name: "VENUS",
      system: "VENUS",
      naif: "299",
      aaxisradius: "6051.8",
      baxisradius: "6051.8",
      caxisradius: "6051.8",
      webmap: [
        {
          displayname: "Venus 5M Quad Charts",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_simp_cyl_quads.map",
          layer: "Venus5M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Moon 2.5M Quad Charts",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl_quads.map",
          layer: "Moon2.5M_Quads",
          units: "dd",
          format: "image/png",
          transparent: "true",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "AMES Color (MDIM 2.1) ",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MDIM21_color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/AMES",
          notes: " "
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "MESSENGER Team May 2013",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl.map",
          layer: "MESSENGER_May2013",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "ASU/USGS/NASA",
          notes: ""
        },
        {
          displayname: "Messenger MDIS Color Mosaic v3",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl.map",
          layer: "MESSENGER_Color",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "ASU/NASA",
          notes: ""
        },
        {
          displayname: "MESSENGER Team May 2013",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_npole.map",
          layer: "MESSENGER_north_May2013",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "true",
          citation: "ASU/USGS/NASA",
          notes: ""
        },
        {
          displayname: "MESSENGER Team May 2013",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_spole.map",
          layer: "MESSENGER_south_May2013",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-1081954.601",
            right: "1081954.601",
            top: "1081954.601",
            bottom: "-1081954.601"
          },
          primary: "true",
          citation: "ASU/USGS/NASA",
          notes: ""
        }
      ]
    },
    {
      name: "VESTA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "255",
      baxisradius: "255",
      caxisradius: "255",
      webmap: [
        {
          displayname: "DAWN",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/vesta_simp_cyl.map",
          layer: "Dawn_HAMO_global",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "DLR/NASA",
          notes: ""
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "LROC LOLA Steel Color Shade (LOLA)",
          projection: "cylindrical",
          controlnet: "LOLA",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "LOLA_steel",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "GODDARD",
          notes: ""
        }
      ]
    },
    {
      name: "CERES",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "470",
      baxisradius: "470",
      caxisradius: "470",
      webmap: [
        {
          displayname: "DAWN",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/ceres_simp_cyl.map",
          layer: "Ceres_FC_global",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "NASA/JPL-Caltech/UCLA/MPS/DLR/IDA (Thomas Roatsch)",
          notes: ""
        }
      ]
    },
    {
      name: "TITAN",
      system: "SATURN",
      naif: "606",
      aaxisradius: "2575",
      baxisradius: "2575",
      caxisradius: "2575",
      webmap: [
        {
          displayname: "Titan HiSAR Global Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/saturn/titan_simp_cyl.map",
          layer: "Titan_HiSAR_Mosaic",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "NASA/JPL/USGS",
          notes: "Based on Cassini"
        }
      ]
    },
    {
      name: "URANUS",
      system: "URANUS",
      naif: "799",
      aaxisradius: "25559",
      baxisradius: "25559",
      caxisradius: "24973",
      webmap: [
        {
          displayname: "Uranus Simulated Global Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/uranus/uranus_simp_cyl.map",
          layer: "JHT_VOYAGER_HST",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "J. Hastings-Trew/NASA",
          notes: "based on Voyager 2 and HST"
        }
      ]
    },
    {
      name: "NEPTUNE",
      system: "NEPTUNE",
      naif: "899",
      aaxisradius: "24764",
      baxisradius: "24764",
      caxisradius: "24341",
      webmap: [
        {
          displayname: "Neptune Simulated Global Mosaic",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/neptune/neptune_simp_cyl.map",
          layer: "JHT_VOYAGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "J. Hastings-Trew/NASA",
          notes: "based on Voyager 2"
        }
      ]
    },
    {
      name: "VESTA",
      system: "ASTEROIDS",
      naif: "",
      aaxisradius: "255",
      baxisradius: "255",
      caxisradius: "255",
      webmap: [
        {
          displayname: "DAWN",
          projection: "north-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/vesta_npole.map",
          layer: "Dawn_HAMO_north",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-510010",
            right: "510010",
            top: "510010",
            bottom: "-510010"
          },
          primary: "true",
          citation: "DLR/NASA",
          notes: ""
        },
        {
          displayname: "DAWN",
          projection: "south-polar stereographic",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/asteroid_belt/vesta_spole.map",
          layer: "Dawn_HAMO_south",
          units: "m",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "-510010",
            right: "510010",
            top: "510010",
            bottom: "-510010"
          },
          primary: "true",
          citation: "DLR/NASA",
          notes: ""
        }
      ]
    },
    {
      name: "VENUS",
      system: "VENUS",
      naif: "299",
      aaxisradius: "6051.8",
      baxisradius: "6051.8",
      caxisradius: "6051.8",
      webmap: [
        {
          displayname: "FMAP Right-look (Magellan)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/venus/venus_simp_cyl.map",
          layer: "MAGELLAN_RightLook",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "USGS/NASA",
          notes: ""
        }
      ]
    },
    {
      name: "MARS",
      system: "MARS",
      naif: "499",
      aaxisradius: "3396.19",
      baxisradius: "3396.19",
      caxisradius: "3376.2",
      webmap: [
        {
          displayname: "THEMIS IR Night (MDIM2.1)",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "THEMIS_night",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "60",
            bottom: "-60"
          },
          primary: "false",
          citation: "ASU/NASA",
          notes: ""
        },
        {
          displayname: "MOLA THEMIS Blend (MDIM2.1)",
          projection: "cylindrical",
          controlnet: "MDIM2.1",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mars/mars_simp_cyl.map",
          layer: "MOLA_THEMIS_blend",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "true",
          citation: "Goddard/ASU/USGS",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "MESSENGER over Mariner (Preliminary MESSENGER)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl.map",
          layer: "MESSENGER_Mariner",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "ASU/USGS/NASA",
          notes: " "
        }
      ]
    },
    {
      name: "MOON",
      system: "EARTH",
      naif: "301",
      aaxisradius: "1737.4",
      baxisradius: "1737.4",
      caxisradius: "1737.4",
      webmap: [
        {
          displayname: "Kaguya TC Ortho Mosaic (Kaguya)",
          projection: "cylindrical",
          controlnet: "ULCN 2005",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/earth/moon_simp_cyl.map",
          layer: "KaguyaTC_Ortho",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "JAXA",
          notes: ""
        }
      ]
    },
    {
      name: "MERCURY",
      system: "MERCURY",
      naif: "199",
      aaxisradius: "2439.7",
      baxisradius: "2439.7",
      caxisradius: "2439.7",
      webmap: [
        {
          displayname: "MESSENGER Team May 2016 (MESSENGER)",
          projection: "cylindrical",
          controlnet: "UNKNOWN",
          type: "WMS",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/maps/mercury/mercury_simp_cyl.map",
          layer: "MESSENGER",
          units: "dd",
          format: "image/png",
          transparent: "false",
          bounds: {
            left: "0",
            right: "360",
            top: "90",
            bottom: "-90"
          },
          primary: "false",
          citation: "ASU/USGS/NASA",
          notes: " "
        }
      ]
    }
  ]
};
