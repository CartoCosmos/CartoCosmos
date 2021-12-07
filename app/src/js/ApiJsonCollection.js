
function callAPI() {
    return fetch("http://asc-stacbrowser.s3-website-us-west-2.amazonaws.com/catalog.json")
           .then(response => response.json());
}


function getStacTargetCatalog(name) {
  if (name == "Mars") {
    return callAPI().then(result => {
      console.log("STAC Catalog for USGS: ");
      console.log(result);
      for (let i = 0; i < result.links.length; i++) {
        if (result.links[i].title == 'Mars Analysis Ready Data') {
          return fetch(result.links[i].href)
            .then(response => response.json())
        }
      }
    });
  }
  if (name == "Europa") {
    return callAPI().then(result => {
      console.log("STAC Catalog for USGS: ");
      console.log(result);
      for (let i = 0; i < result.links.length; i++) {
        if (result.links[i].title == 'Jupiter Analysis Ready Data') {
          return fetch(result.links[i].href)
            .then(response => response.json())
        }
      }
    });
  }
}


function getStacMissionCatalogs(name) {
  return getStacTargetCatalog(name).then(result => {
    console.log("STAC Catalog(s) for Specific Target: ");
    console.log(result);
    for (let i = 0; i < result.links.length; i++) {
      if(result.links[i].rel == 'child'){
        return fetch(result.links[i].href)
          .then(response => response.json())
      }
    }
  });
}

function getItemCollection(name) {
  // ctx_dtms skips a step in which there is no mission catalog instead it
  // takes you straight to the collection from the target catalog
  if (name == "Mars"){
    return getStacTargetCatalog(name).then(result => {
      console.log("STAC Catalog(s) for Specific Target: ");
      console.log(result);
      for (let i = 0; i < result.links.length; i++) {
        if(result.links[i].rel == 'child'){
          return fetch(result.links[i].href)
            .then(response => response.json())
        }
      }
    });
  }
  if (name == "Europa") {
    return getStacMissionCatalogs(name).then(result => {
      console.log("STAC Collection for Specific Mission: ");
      console.log(result);
      return fetch(result.links[3].href)
        .then(response => response.json())
    })
  }
}

// function getStacItems(name) {
//   return getItemCollection(name).then(result => {
//     console.log("STAC Item Collection: ");
//     console.log(result);
//     var items = [];
//     console.log(result.links.length);
//       for (let i = 0; i < result.links.length; i++) {
//         if (result.links[i].rel == 'item') {
//           fetch(result.links[i].href)
//             .then(response => response.json())
//             .then(data => items.push(data))
//         }
//       }
//       console.log(items);
//       return items;
//   });
// }


export{ getItemCollection };
