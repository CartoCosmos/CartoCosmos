var _maxNumberPages = 0;
var _currentPage = 1;
var _numberMatched = 0;

function callAPI() {
  return fetch(
    "https://6vpdmaqce6.execute-api.us-west-2.amazonaws.com/dev/collections"
  ).then(response => response.json());
}

function getItemCollection(name, queryString) {
  var urlArray = [];
  return callAPI().then(result => {
    for (let i = 0; i < result.collections.length; i++) {
      if (
        result.collections[i].summaries["ssys:targets"] == name.toLowerCase()
      ) {
        let length = result.collections[i].links.length;
        for (let j = 0; j < length; j++) {
          let link = result.collections[i].links[j];
          if (link.rel == "items") {
            var url = result.collections[i].links[j].href;
            url = url + queryString;
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
      promiseArray.push(fetch(urlArray[i]));
    }
    return Promise.all(promiseArray).then(function(responses) {
      return Promise.all(
        responses.map(function(response) {
          return response.json();
        })
      );
    });
  });
}

/**
 * @function setNumberMatched
 * @description Sets the value of the return number of footprints
 */
function setNumberMatched(matched) {
  _numberMatched = matched;
  let sliderElement = document.getElementById('valueSlider');
  let limitVal = sliderElement.lastChild.firstChild.value;
    if (limitVal != 0 && matched != 0){
      setMaxNumberPages(Math.floor(matched/limitVal));
    }
}

/**
 * @function getNumberMatched
 * @description Gets the value of the return number of footprints
 */
function getNumberMatched() {
  return _numberMatched
}

/**
 * @function setMaxNumberPages
 * @description Sets the value of the max number of pages possible
 */
function setMaxNumberPages(pages) {
  _maxNumberPages = pages;
}

/**
 * @function getMaxNumberPages
 * @description Gets the value of the max number of pages possible
 */
function getMaxNumberPages() {
  return _maxNumberPages;
}

/**
 * @function setCurrentPage
 * @description Sets the value of the current page
 */
function setCurrentPage(page) {
  _currentPage = page;
}

/**
 * @function getMaxNumberPages
 * @description Gets the value of the max number of pages possible
 */
function getCurrentPage() {
  return _currentPage;
}


export { getItemCollection, getMaxNumberPages, setCurrentPage, getCurrentPage, setNumberMatched, getNumberMatched, setMaxNumberPages };
