'use strict';
function Store (name, minCust, maxCust, cookiesAvg) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesAvg = cookiesAvg;
  storesArray.push(this);
  console.log(storesArray);
  //seperate render functions for data that will be spit out as rows, then this.render

  //Need for loop over the array of stores for the render function that I never had.
}

var storesArray = [];
var firstandPike = new Store('FirstandPike', '23', '65', '6.3');
var seaTacAirport = new Store('SeaTacAirport', '3', '24', '1.2');
var seattleCenter = new Store('SeattleCenter', '11', '38', '3.7');
var capitolHill = new Store('Capitol Hill', '20', '38', '2.3');
var alki = new Store('Alki', '2', '16', '4.6');

var stores = document.getElementById('allStoresGetMoney');
var arrayTheFirst = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
function storeTable() {
}

function makeHeaderRow() {
  for (var i = 0; i < arrayTheFirst.length; i++) {
    var trEl = document.createElement('th');
    var tdEl = document.createElement('tr');
    tdEl.textContent = arrayTheFirst[i];
    stores.appendChild(trEl);
    storesArray.push(tdEl.textContent);
    console.log(arrayTheFirst);
    console.log(thEl.textContent);
  }

  var trEl = document.createElement('tr');
  //td of all cookies sold, for loop through stores
  var thEl = document.createElement('td');
  thEl.textContent = this.storesArray[0].name;
  trEl.appendChild(thEl);
  var thEl = document.createElement('td');
  thEl.textContent = this.storesArray[1].name;
  trEl.appendChild(thEl);
  var thEl = document.createElement('td');
  thEl.textContent = this.storesArray[2].name;
  trEl.appendChild(thEl);
  var thEl = document.createElement('td');
  thEl.textContent = this.StoresArray[3].name;
  trEl.appendChild(thEl);
  var thEl = document.createElement('td');
  thEl.textContent = this.StoresArray[4].name;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
  console.log(storeTable);
}





// var Pike1 = {
//   blimey: function() {
//     var getMoney = document.getElementbyID('firstArray');
//     var liEl = document.createElement('li');
//     liEl.textContent = totalSold += tempCookies;
//     getMoney.appendchild(liEl);
//     console.log(liEl.textContent);
//   },
//
//
//   minCust: 23,
//   maxCust: 65,
//   cookiesAvg: 6.3,
//   cookiesSoldPerHour: [],
//   fml: function () {
//     var list1 = document.getElementById('firstArray');
//     var that = this;
//     for (var i = 0; i < arrayTheFirst.length; i++)
//       (function (i) {
//
//         var liEl = document.createElement('li');
//         liEl.textContent = arrayTheFirst[i] + ' ' + that.cookiesSoldPerHour[i];
//         list1.appendChild(liEl);
//       })(i);
//
//   },
//   customerEquation: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var totalSold = 0;
//     for(var i = 0; i < arrayTheFirst.length; i++) {
//       var tempCookies = (Math.ceil(this.customerEquation() * this.cookiesAvg));
//       this.totalSold += this.cookiesSoldPerHour[i];
//       this.cookiesSoldPerHour.push(tempCookies);
//
//     }
//
//
//   },
//
// // }
// };
//
// Pike1.cookiesPerHour()
