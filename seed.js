var db = require('./models');

var vacations_list = [
  {
    place: 'Colombia',
    date: 'December 2016',
    duration: '2.5 weeks'
  },
  {
    place: 'Puerto Rico',
    date: 'December 2016',
    duration: '1 week'
  },
  {
    place: 'Paris, France',
    date: 'November 2016',
    duration: '1 week'
  },
  {
    place: 'Sweden',
    date: 'November 2016',
    duration: '1 week'
  }
];

db.Vacation.remove({}, function(err, vacations){
  console.log('removed all vacations');

  vacations_list.forEach(function (vacationData) {
    var vacation = new db.Vacation({
      place: vacationData.place,
      date: vacationData.date,
      duration: vacationData.duration
    });

  });
});
