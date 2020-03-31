// Logs query events into the console.
document.querySelector("#autoComplete").addEventListener("autoComplete", function(event) {
    console.log(event.detail);
  });

/**
 * @class autoComplete
 * @classdesc Declares a new autocomplete that is ran when the user enters more data into the autocomplete box.
 */
var newAutocomplete = new autoComplete({
    //Defines the data that will be returned inside of the autocomplete.
    data: { 
      //Gets data source for autocomplete asyncronusly.
      src: async () => {
        // API key token
        const token = "this_is_the_API_token_number";
        //Const of value entered for query.
        const query = document.querySelector("#autoComplete").value;
        //Returns Json array of values that contain the query inside of them.
        return nameArray;
      },
      //Searches the returned data based off of the name property.
      key: ["clean_feature"],
      //Does not cache search.
      cache: false
    },
    //Returns the query (OPTIONAL, kept in for now to make sure nothing breaks when it is removed.).
    query: {   
          //Can be used to change the query by looking for certain values                            
          manipulate: (query) => {
            //Returns the query
            return query;
          }
    },
    //Triggers an event which displays the current status of the query in the console log.
    trigger: {
      //Trigger runs when searchbox is selected, clicked out of, or has been typed in.
        event: ["input", "focusin", "focusout"]
        
      },
    //Sorts values in descending order.
    sort: (a, b) => {                    
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
    //Value displayed in searchbox before any value is entered.
    placeHolder: "Enter feature here...", 
    //ID of input/searchbox which will be used.    
    selector: "#autoComplete",       
    //Does not display autocomplete results list until the characters entered into the searchbox exceed the threshold.   
    threshold: 1,       
    //Displays search with strict (starts with) results and not loose (contains) results.                                     
    searchEngine: "strict",  
    //Defines attributes for the results list.            
    resultsList: {
        //Renders/displays the results list.
        render: true,   
        //Edits containter id of the results list to be #autoComplete_list.                  
        container: source => {
            //Sets id to #autoComplete_list.
            source.setAttribute("id", "#autoComplete_list");
        },
        //Selects the input which the results list will be using.
        destination: document.querySelector("#autoComplete"),
        //Sets location of results list relative to the destination (above), can be afterend, afterbegin, beforebegin, and beforeend.
        position: "afterend",
        //Sets element type of the results list (ul, div, span, etc...).
        element: "ul",
    },
    //Sets the max number of results that can be returned in a results list for a query (10).
    maxResults: 10,    
    //Highlights query string characters inside of the results list.                     
    highlight: true,     
    //Edits each item on the list.                  
    resultItem: {                          
        content: (data, source) => {
            //Displays list items only when they match the query.
            source.innerHTML = data.match;
        },
        //Displays result items as list items.
        element: "li"
    },
    /*noResults: () => {                     // Action script on noResults      | (Optional)
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },*/

    /**
     * @function onSelection
     * @description Runs a script on the selection of a result item, will be used to edit the url for search queries.
     * @param {JSON} feedback
     */
    onSelection: feedback => {             
       //Creates string used for searching with the selected name.
        var URLString = ("https://planetarynames.wr.usgs.gov/SearchResults?feature=" + feedback.selection.value.clean_feature);
        //Replaces spaces with %20 for encoded URL string.
        var encodedURLString = URLString.replace(" ", "%20");
        //Puts web address into browser.
        window.location.href = encodedURLString;
    }
});