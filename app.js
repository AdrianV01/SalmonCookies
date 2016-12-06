'use strict';
var arrayTheFirst = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
var Pike1 = {
  blimey: function() {
    var getMoney = document.getElementbyID('firstArray');
    var liEl = document.createElement('li');
    liEl.textContent = totalSold += tempCookies;
    getMoney.appendchild(liEl);
    console.log(liEl.textContent);
  },


  minCust: 23,
  maxCust: 65,
  cookiesAvg: 6.3,
  cookiesSoldPerHour: [],
  fml: function () {
    var list1 = document.getElementById('firstArray');
    var that = this;
    for (var i = 0; i < arrayTheFirst.length; i++)
      (function (i) {

        var liEl = document.createElement('li');
        liEl.textContent = arrayTheFirst[i] + ' ' + that.cookiesSoldPerHour[i];
        list1.appendChild(liEl);
      })(i);

  },
  customerEquation: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var totalSold = 0;
    for(var i = 0; i < arrayTheFirst.length; i++) {
      var tempCookies = (Math.ceil(this.customerEquation() * this.cookiesAvg));
      totalSold += tempCookies;
      this.cookiesSoldPerHour.push(tempCookies);

    }


  },
//   //var taTeam= ['Rachel', 'Aliza', 'Kenneth', 'Kevia'];
// var taList =document.getElementbyId('tas');
// for (var i = 0; i < taTeam.length; i++) {
//   var liEl= document.createElement('li');
//   liEl.textContent = taTeam[i];
//   talist.appendChild(liEl);
// }
};

Pike1.cookiesPerHour();
