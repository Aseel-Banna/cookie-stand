'use strict';

var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM',
    '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

//var branches = [Seattle, Tokyo, Dubai, Paris, Lima];
var branches = [];

var tableData;

// Creating a constructer
function Location(bName, minCustomer, maxCustomer, avgCookies) {
    this.name = bName;
    this.min = minCustomer;
    this.max = maxCustomer;
    this.avg = avgCookies;
    this.customer = [];
    this.cookies = [];
    this.totalCokiesPerHour = [];
    this.total = 0;
    branches.push(this);
}
// Constructr Functions
Location.prototype.customer_per_hour = function () {
    for (var i = 0; i < hours.length; i++) {
        this.customer.push(randomNumber(this.min, this.max));
        // console.log(this.customer);
    }
};

Location.prototype.cookies_purchased = function () {
    for (var j = 0; j < hours.length; j++) {
        this.cookies.push(Math.ceil(multipacation(this.customer[j], this.avg)));
        // console.log('avg', this.cookies);
    }
};

Location.prototype.getTotal = function () {
    for (var c = 0; c < this.cookies.length; c++) {
        this.total = this.total + this.cookies[c];

    }
    return this.total;
};



var parentMain;
var title;
var table;

createTable();
createHedeing();

Location.prototype.render = function () {

    var tableHeading = document.createElement('tr');

    table.appendChild(tableHeading);

    var dataBranchname = document.createElement('td');
    tableHeading.appendChild(dataBranchname);
    dataBranchname.textContent = this.name;


    for (var i = 0; i < this.cookies.length; i++) {
        tableData = document.createElement('td');
        tableHeading.appendChild(tableData);
        tableData.textContent = this.cookies[i];
    }

    var tableRow2 = document.createElement('td');
    tableHeading.appendChild(tableRow2);
    tableRow2.textContent = this.getTotal();

}



// Seattle Object
var Seattle = new Location('Seattle', 23, 65, 6.3);

Seattle.customer_per_hour();
Seattle.cookies_purchased();
Seattle.total;
Seattle.render();
// console.log(Seattle);

// Tokyo Object
var Tokyo = new Location('Tokyo', 3, 24, 1.2);

Tokyo.customer_per_hour();
Tokyo.cookies_purchased();
Tokyo.total;
Tokyo.render();
// console.log(Tokyo);

//Dubai Object
var Dubai = new Location('Dubai', 11, 38, 3.7);

Dubai.customer_per_hour();
Dubai.cookies_purchased();
Dubai.total;
Dubai.render();
// console.log(Dubai);

// Paris Object
var Paris = new Location('Paris', 20, 38, 2.3);

Paris.customer_per_hour();
Paris.cookies_purchased();
Paris.total;
Paris.render();
// console.log(Paris);

// Lima Object
var Lima = new Location('Lima', 2, 16, 4.6);

Lima.customer_per_hour();
Lima.cookies_purchased();
Lima.total;
Lima.render();



var tableRow1 = document.createElement('th');
table.appendChild(tableRow1);
tableRow1.textContent = 'Total';


var total0 = [];
var totalOfTotal = 0;

for (var x = 0; x < branches.length; x++) {
    totalOfTotal = totalOfTotal + branches[x].total;
}

for (var i = 0; i < hours.length; i++) {
    var a = 0;
    for (var x = 0; x < branches.length; x++) {
        a = a + branches[x].cookies[i];
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',a)
    }
    total0.push(a);
    
}

total0.push(totalOfTotal);


for (var i = 0; i < total0.length; i++) {
    var totalData = document.createElement('td');
    table.appendChild(totalData);
    totalData.textContent = total0[i];
}


// Declaring Functions

// random function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// the multiplication function
function multipacation(customer, cookie) {
    var customer;
    var cookie;
    return customer * cookie;
}

// the sum function
function sum() {
    var a;
    var b;
    return a + b;
}

// creating the table
function createTable() {
    parentMain = document.getElementById('main-id');
    /*title = document.createElement('h1');
    parentMain.appendChild(title);
    title.textContent = 'Table of Sales';*/
    table = document.createElement('table');
    parentMain.appendChild(table);

}

// creating Headings
function createHedeing() {
    var theHoursRow = document.createElement('tr');
    table.appendChild(theHoursRow);
    var cell = document.createElement('th');
    theHoursRow.appendChild(cell);
    cell.textContent = 'Location/Working Hours';
    var hourRow;

    for (var i = 0; i < hours.length; i++) {
        hourRow = document.createElement('th');
        theHoursRow.appendChild(hourRow);
        hourRow.textContent = hours[i];
    }
    var totalCell = document.createElement('th');
    theHoursRow.appendChild(totalCell);
    totalCell.textContent = 'Daily Location Total';
}


// --------------------Event-------------------------------------
function newLocation(event) {
    event.preventDefault();
    // console.log(event.target);
    var bName = event.target.branchName.value;
    var minCustomer = parseInt(event.target.min_customer.value);
    var maxCustomer = parseInt(event.target.max_customer.value);
    var avgCookies = parseInt(event.target.avg_cookies.value);
    // console.log(minCustomer, maxCustomer, avgCookies, bName);
    table.innerHTML= '';
    createTable();
    createHedeing();
    newObject(bName, minCustomer, maxCustomer, avgCookies); 
    
    for (var i=0; i<branches.length; i++){
        branches[i].cookies=[];
        branches[i].customer_per_hour();
        branches[i].cookies_purchased();
        branches[i].total;
        branches[i].render();
    }

    var tableRow1 = document.createElement('th');
    table.appendChild(tableRow1);
    tableRow1.textContent = 'Total';

        var total0 = [];
    var totalOfTotal = 0;

    for (var x = 0; x < branches.length; x++) {
        totalOfTotal = totalOfTotal + branches[x].total;
    }

    for (var i = 0; i < hours.length; i++) {
        var a = 0;
        for (var x = 0; x < branches.length; x++) {
            a = a + branches[x].cookies[i];
            // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',a)
        }
        total0.push(a);
        
    }

    total0.push(totalOfTotal);


    for (var i = 0; i < total0.length; i++) {
        var totalData = document.createElement('td');
        table.appendChild(totalData);
        totalData.textContent = total0[i];
    }
      

}

function newObject(bName, minCustomer, maxCustomer, avgCookies) {
    var newBranch = new Location(bName, minCustomer, maxCustomer, avgCookies);
    /*newBranch.customer_per_hour();
    newBranch.cookies_purchased();
    newBranch.total;
    newBranch.render();
    // console.log(newBranch);*/
}

var sub = document.getElementById('form-id');
sub.addEventListener('submit', newLocation);