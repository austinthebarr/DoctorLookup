import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Doctor
} from './../src/doctor-logic.js';

$(function () {
  $("#bykeyWord").click(function () {
    $("#output").empty();
    const input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let keyPromise = newDoctor.findDoctorByKey(input);

    keyPromise.then(function (response) {
      let doctor = JSON.parse(response);
      if (doctor == 0) {
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
      $("#error").text(`there was an Error:${error.message}`);
      $("#error").text(`there was an Error:${error.message}`);
    });
  });

  $("#byname").click(function(){
    
  });
});