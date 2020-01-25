// from data.js
var tableData;

// YOUR CODE HERE!

var button =  d3.select("#filter-btn");
button.on("click", function() {
    //initialized original data
    tableData = data;
    //call function to read inputdata and check null, "" data
    var inputDate = readInput("datetime")
    var inputCity = readInput("city")
    var inputState = readInput("state")
    var inputCountry = readInput("country")
    var inputShape = readInput("shape")
    //console.log(tableData)
  
    //multy filter for every condition  by using filter function
    if(inputDate != null)
    {
        tableData = tableData.filter(fData => fData.datetime == inputDate);
        console.log(tableData)
    };
    if(inputCity != null)
    {
        tableData = tableData.filter(fData => fData.city == inputCity);
        console.log(tableData)
    };
    if(inputState != null)
    {
        tableData = tableData.filter(fData => fData.state == inputState);
        console.log(tableData)
    };
    if(inputCountry != null)
    {
        tableData = tableData.filter(fData => fData.country == inputCountry);
        console.log(tableData)
    };
    if(inputShape != null)
    {
        tableData = tableData.filter(fData => fData.shape == inputShape);
        console.log(tableData)
    };
    
    //clear table for privious search result
    clearTable();  
    
    //pupulate data
    pupulateTable(tableData);



});

//clear function table if privious search result in the table
function clearTable(){
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}

//pupulate in html table dynamically
function pupulateTable(newData)
{
    var tbody = d3.select("tbody");

    newData.forEach((newData) => {
        var row = tbody.append("tr");
        Object.entries(newData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

    
};
 
function readInput(inputText)
{
    var str
    element = document.getElementById(inputText);
    if (element != null) 
    {
        if(element.value !="")
        {
            str = element.value;
        }
        else
        {
            str = null
        }
       
    }
    else 
    {
        str = null;
    
    }
    //console.log(str)
    return str;
    
};
  
// Event handlers are just normal functions that can do anything you want




  