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
      $("#output").append(`${doctor.data[0].profile.first_name}`);
    }, function (error) {
      $("#error").text(`there was an Error:${error.message}`);
    });
  });
});