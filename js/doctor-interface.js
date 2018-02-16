import { promise } from './../js/doctor.js';
import apiKey from './../.env';

$(document).ready(function() {
  let stuff;

  $('#condition-form').submit(function(event) {
    event.preventDefault();
    let stuff = $('#stuff').val();
    let newSearch = promise(stuff);
    $('#result').empty();

    newSearch.then(function(response) {

      let body = JSON.parse(response);
        for (let i = 0; i < body.data.length; i++) {
          $('#result').append();
        }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
    });
  });
  
});
