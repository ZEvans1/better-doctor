import { promise } from './../js/doctor.js';
import apiKey from './../.env';

$(document).ready(function() {
  let condition;

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

});
