import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Doctor
} from './../src/doctor-logic.js';

$(function () {
  $("#bykeyWord").click(function () {
    $("#output").empty();
    let input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let promise = newDoctor.findDoctorByKey(input);

    promise.then(function (response) {
      let doctor = JSON.parse(response);
      if (doctor.data.length != 0) {
        for (let i = 0; i < doctor.data.length; i++) {
          $("#output").append("<div>" +
            '<h2>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '</h2>' +
            '<p>' + "Phone Number: " + doctor.data[i].practices[0].phones[0].number + '</p>' +
            '<p>' + doctor.data[i].practices[0].visit_address.street + '</p>' +
            '<p>' + doctor.data[i].practices[0].visit_address.city + "," +
            doctor.data[i].practices[0].visit_address.state + " " +
            doctor.data[i].practices[0].visit_address.zip +
            '</p>' +
            '<p>' + "Excepting new Patients: " + doctor.data[i].practices[0].accepts_new_patients + '</p>' +
            "</div>"
          );
        }
      } else {
        $("#output").append("<p>" + "No Doctors Meet Criteria" + "</p>");
      }
    }, function (error) {
      $("#error").html("<p>"+`there was an Error:${error.message}`+"</p>");
    });
  });

  $("#byname").click(function () {
    $("#output").empty();
    let input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let namePromise = newDoctor.findDoctorByName(input);

    namePromise.then(function (response) {
      let doctor = JSON.parse(response);
      if(doctor.data.length != 0) {
        for (let i = 0; i < doctor.data.length; i++) {
          $("#output").append("<div>" +
            '<h2>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '</h2>' +
            '<p>' + "Phone Number: " + doctor.data[i].practices[0].phones[0].number + '</p>' +
            '<p>' + doctor.data[i].practices[0].visit_address.street + '</p>' +
            '<p>' + doctor.data[i].practices[0].visit_address.city + "," +
            doctor.data[i].practices[0].visit_address.state + " " +
            doctor.data[i].practices[0].visit_address.zip +
            '</p>' +
            '<p>' + "Excepting new Patients: " + doctor.data[i].practices[0].accepts_new_patients + '</p>' +
            "</div>"
          );
        }
      } else {
        $("#output").append("<p>" + "No Doctors Meet Criteria" + "</p>");
      }
    }, function (error) {
      $("#error").html("<p>"+`there was an Error:${error.message}`+"</p>");
    });
  });
});