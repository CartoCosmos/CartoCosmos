//define("require");
//require(['@tarekraafat/autocomplete.js/dist/js/autoComplete']);
new autoComplete({
    data: {                              // Data src [Array, Function, Async] | (REQUIRED)
      src: async () => {
        // API key token
        const token = "this_is_the_API_token_number";
        // User search query
        const query = document.querySelector("#autoComplete").value;
        // Fetch External Data Source
        //const source = await fetch("https://astrocloud.wr.usgs.gov/dataset/data/nomenclature/MARS/WFS?version=1.1.0.0&service=WFS&request=GetFeature&srsname=EPSG4326&outputFormat=application/json");
        // Format data into JSON
        //const data = await source.json();
        // Return Fetched data
        //return source.features[0].name;    
        // console.log(nameArray[0]); 
        return nameArray;
      },
      key: ["name"],
      cache: false
    },
    /*query: {                               // Query Interceptor               | (Optional)
          manipulate: (query) => {
            return query.replace("pizza", "burger");
          }
    },*/
    sort: (a, b) => {                    
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
    placeHolder: "Nomenclature",     
    selector: "#autoComplete",          
    threshold: 3,                       
    debounce: 300,                       
    searchEngine: "strict",              
    resultsList: {                       
        container: source => {
            source.setAttribute("id", "nomenclature");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         
    highlight: true,                       
    resultItem: {                          
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     // Action script on noResults      | (Optional)
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             // Action script onSelection event | (Optional)
        console.log(feedback.toString());
    }
});