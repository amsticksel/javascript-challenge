// from data.js
var tableData = data;

// YOUR CODE HERE!
// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(row => console.log(row));
// get a reference to tbody
let tbody = d3.select("tbody");
// Step 3:  Use `Object.entries` to console.log each weather report value
// runs once for each object in data
data.forEach(row => {
    let nRow = tbody.append("tr");
    // console.log(Object.entries(row) );
    // Object.entries(row).forEach(entry => console.log(entry[0], entry[1]));
    // runs once for each key-value pair in a row
    Object.entries(row).forEach(entry => {
        let key = entry[0];
        let val = entry[1];
        nRow.append("td").text(val);
    });
});


let resetbutton = d3.select("#reset-btn");
// Complete the click handler for the form
resetbutton.on("click", handleClick2);
function handleClick2() {
    d3.event.preventDefault();
    d3.selectAll("tr:not(#header-row)").remove();
    d3.selectAll("td").remove();
    // get a reference to tbody
    let tbody = d3.select("tbody");
    // Step 3:  Use `Object.entries` to console.log each weather report value
    // runs once for each object in data
    data.forEach(row => {
        let nRow = tbody.append("tr");
        // console.log(Object.entries(row) );
        // Object.entries(row).forEach(entry => console.log(entry[0], entry[1]));
        // runs once for each key-value pair in a row
        Object.entries(row).forEach(entry => {
            let key = entry[0];
            let val = entry[1];
            nRow.append("td").text(val);
        });
    });
};


// Assign the data from `data.js` to a descriptive variable
// Select the button
let searchbutton = d3.select("#filter-btn");
// Complete the click handler for the form
searchbutton.on("click", handleClick);
function handleClick() {
    console.log("hey!");
    d3.event.preventDefault();
    d3.select("tbody");
    d3.selectAll("td").remove();
    // Select the input element and get the raw HTML node
    var ufodateinput = document.getElementById('date').value;
    console.log(ufodateinput);
    // Use the form input to filter the data by blood type
    // retain only those people whose .bloodtype equals the input text
    let matches = tableData.filter(ufo => ufo.datetime === ufodateinput);
    matches.forEach(match => console.log(match));
    // get a reference to tbody
    let tbody = d3.select("tbody");

    // Step 3:  Use `Object.entries` to console.log each weather report value
    // runs once for each object in data
    matches.forEach(match => {
        let matchRow = tbody.append("tr");
        // console.log(Object.entries(row) );
        // Object.entries(row).forEach(entry => console.log(entry[0], entry[1]));
        // runs once for each key-value pair in a row
        Object.entries(match).forEach(match => {
            let key2 = match[0];
            let val2 = match[1];
            matchRow.append("td").text(val2);
        });
    });
};

//datepicker from https://formden.com/blog/date-picker
