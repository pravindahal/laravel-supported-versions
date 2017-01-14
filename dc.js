var d = new Date('23 Feb 2017');
var timeAfterBeginningOfYear = d - new Date('1 Jan 2014');
timeAfterBeginningOfYear /= 1000;
timeAfterBeginningOfYear /= 3600;
timeAfterBeginningOfYear /= 24;
timeAfterBeginningOfYear = Math.round(timeAfterBeginningOfYear);
console.log(timeAfterBeginningOfYear * 120 / 365 + 80);
