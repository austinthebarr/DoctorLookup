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
        $("#output").append('<li>' + doctor.data[i].profile.first_name + '<li>');
      }
    }, function (error) {
      $("#error").text(`there was an Error:${error.message}`);
    });
  });
});