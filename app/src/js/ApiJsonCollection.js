
function callAPI() {
    return fetch("http://asc-stacbrowser.s3-website-us-west-2.amazonaws.com/catalog.json")
           .then(response => response.json());
}


function getStacTargetCatalog(name) {
  if (name == "Mars") {
    return callAPI().then(result => {
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
      for (let i = 0; i < result.links.length; i++) {
        if (result.links[i].rel == 'child') {
          return fetch(result.links[i].href)
            .then(response => response.json())
        }
      }
    });
  }
  if (name == "Europa") {
    return getStacMissionCatalogs(name).then(result => {
        return Promise.all([
          fetch(result.links[3].href),
          fetch(result.links[4].href)
        ]).then(function (responses) {
	         return Promise.all(responses.map(function (response) {
		           return response.json();
	         }));
      });
    })
  }
}

export{ getItemCollection };
