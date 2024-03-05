import React from 'react'
import '../css/patientDashboard.css';
import Button from '../components/Button';
import profile from '../assets/profile.png'
import File from '../components/File';
function PatientDashboard() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='pd-left-section'>
          <div className='pd-profile-header'>
            <img src={profile} />
            <p className='address'>0x822Ad1c38313b0f569D8E15284330B001d12950D</p>
          </div>
          <div className='links'>
          <Button linkto="/PatientDashboard" class="b-active" name="Documents"/>
          <Button linkto="/pAppointments" class="b-not-active" name="Book Appointment"/>
          <Button linkto="/" class="b-not-active" name="Logout"/>
          </div>
        </div>
        <div className='pd-right-section'>
            <File name="Aadhar Card" cid="#"/>
            <File name="Blood Report" cid="#"/>
            <File name="Prescription" cid="#"/>
            <File name="Aadhar Card" cid="#"/>
            <File name="Blood Report" cid="#"/>
            <File name="Prescription" cid="#"/>
            <File name="Aadhar Card" cid="#"/>
            <File name="Blood Report" cid="#"/>
            <File name="Prescription" cid="#"/>
            <File name="Aadhar Card" cid="#"/>
            <File name="Blood Report" cid="#"/>
            <File name="Prescription" cid="#"/>
            <div className='add-file-button'>Add Files</div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard