'use strict';
var Pike1 = {
  minCust: 23,
  maxCust: 65,
  cookiesAvg: 6.3,
  customerEquation: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var tempCookies = [];
    for(var i = 0; i < 16; i++) {
     (tempCookies.push(Math.ceil(this.customerEquation() * this.cookiesAvg)));

}
return (tempCookies);
}
};
