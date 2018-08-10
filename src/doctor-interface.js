import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Doctor
} from './../src/doctor-logic.js';

$(function () {
  $("#bykeyWord").click(function () {
    const input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let promise = newDoctor.findDoctorByKey(input);

    promise.then(function (response) {
      let doctor = JSON.parse(response);
      for(let i = 0; i < doctor.data.length; i++){
        $("#output").append("<div>" +        
         '<h2>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '</h2>' +
         '<p>' + doctor.data[i].practices[0].phones[0].number + '</p>' +
         '<p>' + doctor.data[i].practices[0].visit_address.street + '</p>' +
         '<p>' + doctor.data[i].practices[0].visit_address.city + "," +
         doctor.data[i].practices[0].visit_address.state +  " " +
         doctor.data[i].practices[0].visit_address.zip +  
         '</p>' +
         "</div>" 
        );
      }
    }, function (error) {
      $("#error").text(`there was an Error:${error.message}`);
      $("#error").text(`there was an Error:${error.message}`);
    });
  });
});