
var db = require('./models');

var vacationList = [
  {
    country: "Austin",
    date: "September 2016",
    duration: "1 week",
    photo: "image"
  },
  {
    country: "New Orleans",
    date: "April 2017",
    duration: "1 week",
    photo: "image"
  }
]

db.Vacation.remove({}, function(err, removedEverything){
  if(err){return console.log(err);}
  
  db.Vacation.create(vacationList, function(err, vacations){
    if(err){return console.log(err);}
    console.log(vacations);
    process.exit(1);
  });
});
