'use strict';
var Pike1 = {
  arrayTheFirst: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  fml: function () { for (var i = 0; i < this.arrayTheFirst.length; i++)
    var list1 = document.getElementById('firstArray');
    var liEl = document.createElement('li');
    liEl.textContent = this.arrayTheFirst[i];
    console.log(liEl);
    list1.appendChild(liEl);
  },
//   var taTeam= ['Rachel', 'Aliza', 'Kenneth', 'Kevia'];
// var taList = document.getElementbyId('tas');
// for (var i = 0; i < taTeam.length; i++) {
//   var liEl= document.createElement('li');
//   liEl.textContent = taTeam[i];
//   talist.appendChild(liEl);
// }
  minCust: 23,
  maxCust: 65,
  cookiesAvg: 6.3,
  customerEquation: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var totalSold = 0;
    for(var i = 0; i < this.arrayTheFirst.length; i++) {
      var tempCookies = (Math.ceil(this.customerEquation() * this.cookiesAvg));
      totalSold += tempCookies;
      this.arrayTheFirst[i] += ': ' + (tempCookies);

    }
    return (this.arrayTheFirst);
  }
};
