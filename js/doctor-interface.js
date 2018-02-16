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
      if (body.data.length < 1) {
        $('#result').text("No doctors found for your search term. Please try another term.")
      }
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
      if (body.data.length < 1) {
        $('#doctor-info').text("No doctors found for your search term. Please make sure you entered the last name you saw above correctly.")
      }
        for (let i = 0; i < body.data.length; i++) {
          let acceptsPatients;
          if (body.data[i].practices[0].accepts_new_patients == true) {
            acceptsPatients = "yes";
          } else {
            acceptsPatients = "no";
          }
          $('#doctor-info').append(body.data[i].profile.last_name + ", " + body.data[i].profile.first_name + ", " + body.data[i].profile.title + "<br>" + '<img src =' + body.data[i].profile.image_url + '>' + "<br>");
          $('#doctor-info').append("Visiting address: " + body.data[i].practices[0].visit_address.street + ", " + body.data[i].practices[0].visit_address.state + ", " + body.data[i].practices[0].visit_address.zip + "<br>" + "Accepting new patients: " + acceptsPatients + "<br>" + "<br>");
          for (let j = 0; j < body.data[i].practices[0].phones.length; j++) {
            $('#doctor-info').append("Phone #: " + body.data[i].practices[0].phones[j].number + "<br>" + "Type : " + body.data[i].practices[0].phones[j].type + "<br>" + "<br>");
          }
        }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
    });
  });

});
