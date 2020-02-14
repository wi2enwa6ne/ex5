function getInputValue() {
 var userAddress = document.getElementById("userAddress").value;
 console.log(userAddress);
 const Http = new XMLHttpRequest();
 const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
 const suffixUrl = ".json?access_token=pk.eyJ1Ijoid2kyZW53YXluZSIsImEiOiJjazVybWtuMTYwZXQyM25tc3VjOWV0N2VuIn0.hT3uNZsKdvqH79rOqSrJjQ"; //Get the access_token from your mapbox account

 var async = false;
 var geocoderResults;
 var geocoderUrl = baseUrl + userAddress + suffixUrl;
 console.log(geocoderUrl);
 Http.open("GET", geocoderUrl, async); // This is like going to a URL in your browser but in code!

// Continued from previous slide...
 Http.onreadystatechange = (e) => {
   geocoderResults = Http.responseText; //This is the information coming back from the server!
   // Display results on the html page
   document.write(geocoderResults); // What goes here?
 }
 Http.send();
 console.log(geocoderResults);

 }

//list of things to change 