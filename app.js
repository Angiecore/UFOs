// Import the data from data.js
const tableData = data;
//alert("it worked.")
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build the table
function buildTable(data) {
    // Clear data to start a clean table
    tbody.html("");

// first array loop for <tr>
data.forEach((dataRow) => {
    // HTLM TABLE - // Append a row to the table body
    let row = tbody.append("tr");
    
//second loop for <td> 
Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
});

});

}

// Date function
function handleClick() {
     // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
    if (date) {
         // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

// Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

//dark mode

const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    

    if(btnSwitch.classList.toggle('active')== true){
        remove()
    } else {
        add()
    }
})

function remove(){
    document.getElementById("backChange").classList.remove("bg-dark")
    document.getElementById("backChange1").classList.remove("bg-dark")
    document.getElementById("backChange2").classList.remove("bg-dark")
    document.getElementById("backChange3").classList.remove("bg-dark")
    document.getElementById("backChange4").classList.remove("bg-dark")
    document.getElementById("backChange5").classList.remove("bg-dark")
    document.getElementById("backChange6").classList.remove("bg-dark")
    document.getElementById("backChange7").classList.remove("bg-dark")
    document.getElementById("backChange8").classList.remove("bg-dark")
   /* document.getElementById("filter-btn1").classList.remove("btn-dark")
    document.getElementById("filter-btn2").classList.remove("btn-dark")
    document.getElementById("filter-btn3").classList.remove("btn-dark")
    document.getElementById("filter-btn4").classList.remove("btn-dark")
    document.getElementById("filter-btn5").classList.remove("btn-dark")
    document.getElementById("clear-btn").classList.remove("btn-dark")*/
    document.getElementById("backChange").style.color = '#000'
    //document.getElementByClassName("jumbotron").style.color = '#000'
}

function add(){
    document.getElementById("backChange").classList.add("bg-dark")
    document.getElementById("backChange1").classList.add("bg-dark")
    document.getElementById("backChange2").classList.add("bg-dark")
    document.getElementById("backChange3").classList.add("bg-dark")
    document.getElementById("backChange4").classList.add("bg-dark")
    document.getElementById("backChange5").classList.add("bg-dark")
    document.getElementById("backChange6").classList.add("bg-dark")
    document.getElementById("backChange7").classList.add("bg-dark")
    document.getElementById("backChange8").classList.add("bg-dark")
    /*document.getElementById("filter-btn1").classList.add("btn-dark")
    document.getElementById("filter-btn2").classList.add("btn-dark")
    document.getElementById("filter-btn3").classList.add("btn-dark")
    document.getElementById("filter-btn4").classList.add("btn-dark")
    document.getElementById("filter-btn5").classList.add("btn-dark")
    document.getElementById("clear-btn").classList.add("btn-dark")*/
    document.getElementById("backChange").style.color = '#fff'
    //document.getElementByClassName("jumbotron").style.color = '#fff'
}