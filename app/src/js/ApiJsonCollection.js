

function callAPI() {
    return fetch("https://stac.astrogeology.usgs.gov/api/collections")
           .then(response => response.json());
}

function getItemCollection(name) {
  var urlArray = [];
  return callAPI().then(result => {
    for (let i = 0; i < result.collections.length; i++) {
      if (result.collections[i].summaries["ssys:targets"] == name.toLowerCase()) {
        let length = result.collections[i].links.length;
        for (let j = 0; j < length; j++) {
          let link = result.collections[i].links[j];
          if (link.rel == 'items') {
            var url = new URL(result.collections[i].links[j].href);
            urlArray.push(url);
          }
         }
       }
     }
     if (urlArray.length == 0) {
       return;
     }
     let promiseArray = [];
     for (let i = 0; i < urlArray.length; i++) {
       promiseArray.push(fetch(urlArray[i]))
     }
     return Promise.all(promiseArray).then(function (responses) {
        return Promise.all(responses.map(function (response) {
	           return response.json();
        }));
      });
   })
 }

export{ getItemCollection };
