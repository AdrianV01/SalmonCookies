'use strict';
var storesArray = [];
var stores = document.getElementById('allStoresGetMoney');
var arrayTheFirst = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var storeCreator = getElementById('newStore');
function Stand(locationName, minimumCustomerPerHour, maximumCustomerPerHour, cookiesAverage) {

  this.locationName = locationName;
  this.minimumCustomerPerHour = minimumCustomerPerHour;
  this.maximumCustomerPerHour = maximumCustomerPerHour;
  this.cookiesAverage = cookiesAverage;
  this.cookiesSoldPerHour = [];
  this.randomNumberArray = [];
  this.totalSold = 0;

  this.calculateRandomCustomerPerHour = function() {
    for (var i = 0; i < arrayTheFirst.length; i++) {
      this.randomNumberArray.push(Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1)) + this.minimumCustomerPerHour);
    }
  };
  this.cookiesPerHour = function() {
    this.calculateRandomCustomerPerHour();
    for(var i = 0; i < arrayTheFirst.length; i++) {
      this.cookiesSoldPerHour.push((Math.ceil(this.randomNumberArray[i] * this.cookiesAverage)));
      this.totalSold += this.cookiesSoldPerHour[i];
    };
  };



  this.rendertabledata = function() {

    var trEl = document.createElement('tr');
    var headerCell = document.createElement('th');
    headerCell.textContent = this.locationName;
    trEl.appendChild(headerCell);
      // var tableNameElements = document.createElement('td');
      // var tableNumbers = document.createElement('td');
      // this.storesNamingFunction();
    for (var i = 0; i < arrayTheFirst.length; i++) {
      var tableNumbers = document.createElement('td');
        // trEl.appendChild(tableNumbers);
      tableNumbers.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tableNumbers);
    }
    stores.appendChild(trEl);
  };
  this.makeFooterContent = function() {

  };

// this.makeHeaderRow();
  this.calculateRandomCustomerPerHour();
  this.cookiesPerHour();
  // this.storesNamingFunction();
  this.rendertabledata();
  storesArray.push(this);
  console.log (storesArray);
}
//*************************END OF CONSTRUCTOR *****************************************

function hourHeader() {
  var blankHeader = document.createElement('th');
  stores.appendChild(blankHeader);
  for (var i = 0; i < arrayTheFirst.length; i++) {
    var hourlyth = document.createElement('th');
    hourlyth.textContent = arrayTheFirst[i];
    stores.appendChild(hourlyth);
  }
};
hourHeader();

// this.makeHeaderRow = function() {
//   var trEl = document.createElement('tr');
//   var tableHeader = document.createElement('th')
//   for (var i = 0; i < arrayTheFirst.length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = arrayTheFirst[i];
//     trEl.appendChild(thEl);
//   };
new Stand('FirstandPike', 23, 65, 6.3);
new Stand('SeaTacAirport', 3, 24, 1.2);
new Stand('SeattleCenter', 11, 38, 3.7);
new Stand('Capitol Hill', 20, 38, 2.3);
new Stand('Alki', 2, 16, 4.6);
//Make Header Row Section

//
//   storesArray.push(Stand);
//
// // }
// }
//
//   stores.appendChild(trEl);
//   function storeTable()  {
//     for (var i = 0; i < storesArray.length; i++)
//
//
//   var trEl = document.createElement('tr');
//   //td of all cookies sold, for loop through stores
//   var thEl = document.createElement('td');
//   thEl.textContent = this.storesArray[i].name;
//   trEl.appendChild(thEl);
//   var thEl = document.createElement('td');
//   thEl.textContent = this.storesArray[1].name;
//   trEl.appendChild(thEl);
//   var thEl = document.createElement('td');
//   thEl.textContent = this.storesArray[2].name;
//   trEl.appendChild(thEl);
//   var thEl = document.createElement('td');
//   thEl.textContent = this.StoresArray[3].name;
//   trEl.appendChild(thEl);
//   var thEl = document.createElement('td');
//   thEl.textContent = this.StoresArray[4].name;
//   trEl.appendChild(thEl);
//   storeTable.appendChild(trEl);
//   console.log(storeTable);
// }
// }


// Stand.cookiesPerHour();

// Stand[0].rendertabledata();
// storeTable();
