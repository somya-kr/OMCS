import CustomAxios from "../utils/customAxios";
import { Notyf } from "notyf";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DoctorCard = (props) => {

  const notyf = new Notyf();
  const navigate = useNavigate();
  let hospitals = JSON.parse(localStorage.getItem("hospitalList")).find((hospital, index) => {
    return hospital.id == props.hospital
  })
  
    const user = JSON.parse(localStorage.getItem("userDetail"));
    console.log(user)
    async function handleAppointment(event) {
      const d = new Date()
    event.preventDefault();

      let currdate = (props.date).toISOString()

    let year = currdate.slice(0, 4)
    let month = currdate.slice(5, 7)
    let day = currdate.slice(9, 11)

    console.log(parseInt(year), parseInt(month), parseInt(day), d.getFullYear(), d.getMonth(), d.getDay())

    if(parseInt(year) == d.getFullYear())
    {
      if(parseInt(month) == d.getMonth() + 1)
      {
        if(parseInt(day) < d.getDate())
        {
          notyf.error("Invalid date!")
          return;
        }
      } else if(parseInt(month) < d.getMonth() + 1)

      {
        notyf.error("Invalid date!")
        return;
      }
    } else if (parseInt(year) < d.getFullYear())
    {
      notyf.error("Invalid date!")
      return
    }
      event.preventDefault();
      CustomAxios.post('appointments', {
        doctor_id: props.id, 
        patient_id: user.id,
        description: 'Scheduled Appointment',
        date: (props.date).toISOString().slice(0,10)
      }).then((response) => {
        console.log("appointment creted =", response);
        window.location.reload(true)
      })
      .catch((err) => {
        console.log(err)
      }) 
    }

    async function handleAccept(event) {
        event.preventDefault();
        CustomAxios.put(`users/${props.id}/`, {
            id: props.id,
            email: props.email,
            password: props.password,
            role: 2,
            first_name: props.name,
            last_name: props.lastname,
            address: props.address,
            contact: props.contact,
            hospital: props.hospital,
            speciality: props.speciality,
            pincode: props.pincode,
            pending: 0

          }).then((response) => {
            console.log("User edited =", response);
            window.location.reload(true)
          })
          .catch((err) => {
            console.log(err)
          }) 
    }

    async function handleRemove(event) {
      event.preventDefault();
      CustomAxios.delete(`users/${props.id}`, {})
      .then((response) => {
        console.log(response)
        window.location.reload(true)
        notyf.success("User remove from database")

      }).catch((err) => {
        console.log(err)
        notyf.error("Something went wrong")
      })
    }

    return (
        <div className="doctor-card">
            <div className="doctor-title">Dr. {props.name} {props.lastname}</div>
            {/* <div className="doctor-title-surname"></div> */}
            <div className="doctor-hospital">Hospital: {hospitals.name + ", " + hospitals.address}</div>
            <div className="doctor-speciality">Speciality: {props.speciality}</div>
            <div className="doctor-address">{props.address}</div>
            <div className="doctor-pincode">{props.pincode}</div>
            <div className="doctor-contact">{props.contact}</div>
            <div className="doctor-email">{props.email}</div>
            {
              props.byAdmin ? ( props.toAccept ? <button className="navbar-button button" onClick={handleAccept}>Accept</button> 
              : <button className="navbar-button button" onClick={handleRemove}>Remove</button> )
              : <button className="navbar-button button" onClick={handleAppointment}>Book appointment</button>
            }
        </div>
    )
}

export default DoctorCard;