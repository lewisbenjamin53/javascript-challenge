// from data.js
var tableData = data;

// creating tbody variable for fillTable function
var tbody = d3.select("tbody");

// function to populate my html table
function fillTable(inputdata) {
  data.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

};

// used the function to fill the html table with my data
fillTable(tableData);


// creating variables for button
var button = d3.select("#filter-btn");
var form = d3.select("#myForm");

// events for button variables
button.on("click", runEnter);
form.on("submit", runEnter);

// function to filter and display table
function runEnter() {
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value").trim();

  var filteredData = tableData.filter(data => data.datetime === inputValue);

  var Table = index;

  document.querySelectorAll("table tbody tr").forEach((row)=>{row.remove()});


  if (filteredData.length == 0){
    console.log("Nothing found");
  }else {
    fillTable(filteredData);
  }
}


