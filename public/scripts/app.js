console.log("Sanity Check: JS is working!");
var template;
var $vacationList;
var allVacations = [];

$(document).ready(function(){

  $vacationList = $('#vacationTarget');

  $.ajax({
    method: 'GET',
    url: '/api/vacations',
    success: handleSuccess,
    error: handleError
  });

  $('#newVacationForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/vacations',
      data: $(this).serialize(),
      success: newBookSuccess,
      error: newBookError
    });

  });

  $vacationList.on('click', '.deleteBtn', function() {
    $.ajax({
        method: 'DELETE',
        url: '/api/vacations/'+$(this).attr('data-id'),
        success: deleteVacationSuccess,
        error: deleteVacationError
      });
    });

});

function getVacationHtml(vacation) {
  return `<hr>
          <p>
            <b>${vacation.country}</b>
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
          </p>`;
}

function getAllVacationsHtml(vacations) {
  return vacations.map(getVacationHtml).join("");
}

function render () {
  $vacationList.empty();
  var vacationHtml = getAllVacationsHtml(allVacations);
  $vacationList.append(vacationsHtml);
};


function handleSuccess(json) {
  allVacations = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#vacationTarget').text('Failed to load vacations, is the server working?');
}

function newVacationSuccess(json) {
  $('#newVacationForm input').val('');
  allVacations.push(json);
  render();
}

function newVacationError() {
  console.log("new vacation error!");
}

function deleteVacationSuccess(json) {
  var vacation = json;
  var vacationId = vacation._id;
  for(var index = 0; index < allVacations.length; index++) {
    if(allVacations[index]._id === vacationId) {
      allVacations.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteVacationError() {
  console.log("vacation deleting error!");
}
