	//Declares global variable name array.
	var nameArray = [];      

	//Pushs data onto nameArray variable.
	function loadGeoJson(data) {
	//Sets index to 0.
	var index = 0;
	//While the feature at the current index is not null.
    while (data.features[index] != null){
		//Log the feature name.
		console.log(data.features[index].properties.clean_feature + " " + index);
		//Push the json object at the current index onto nameArray.
		nameArray.push(data.features[index].properties);
		//Increment index.
        index++;
         }
	}
	//Ajax call to WFS server with the features/data need.
	$.ajax({
		//URL of WFS server.
		url: "https://wms.wr.usgs.gov/cgi-bin/mapserv?map=/var/www/html/mapfiles/earth/moon_nomen_wfs.map&service=WFS&version=1.1.0&&TYPENAME=MOON_POINT&REQUEST=getfeature&PropertyName=clean_feature&outputformat=application/json;%20subtype=geojson&Filter=%3CFilter%3E%3CPropertyIsLike%20wildcard=%27*%27%20singleChar=%27.%27%20escape=%27!%27%3E%3CPropertyName%3Eclean_feature%3C/PropertyName%3E%3CLiteral%3EA*%3C/Literal%3E%3C/PropertyIsLike%3E%3C/Filter%3E",
		//Data type of file on WFS server/above URL.
		dataType: 'json',
		//When the server is successfully connect to, run loadGeoJson function.
		success: loadGeoJson,
		//Timeout on connection to server (WILL NEED TO LOWER WHEN NEW SERVER IS AVAILABLE).
		timeout : 50000
		});