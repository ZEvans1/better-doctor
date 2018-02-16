import { promise } from './../js/doctor.js';
import { promiseTwo } from './../js/doctor-name.js';
import apiKey from './../.env';

$(document).ready(function() {
  let condition;
  let lastName;

  $('#condition-form').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let newSearch = promise(condition);
    $('#result').empty();

    newSearch.then(function(response) {

      let body = JSON.parse(response);
        for (let i = 0; i < body.data.length; i++) {
          $('#result').append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name + ", " + body.data[i].profile.title + "<br>");
        }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
    });
  });

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let lastName = $('#last-name').val();
    let newSearch = promiseTwo(lastName);
    $('#doctor-info').empty();

    newSearch.then(function(response) {

      let body = JSON.parse(response);
        for (let i = 0; i < body.data.length; i++) {
          $('#doctor-info').append(body.data[i].profile.last_name + ", " + body.data[i].profile.first_name + ", " + body.data[i].profile.title + "<br>");
        }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
    });
  });

});
