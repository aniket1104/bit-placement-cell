import React from 'react'
import { useState } from 'react';
import "../assets/css/Update_profile.css";
import { updateprofile } from '../services/api';
const Update_profile = () => {
    const initialvalue  ={
        USN:'',
        firstname:'',
        surname:'',
        mobileno:'',
        email:'',
        class12marks:'',
        class10marks:'',
        averagecgpa:'',
        linkresume:'',
        linklinkedin:'',
        linkgithub:'',
        linkglassdoor:'',
        clubsinvolved:'',
        certifications:'',
        projects:'',
        others:'',
    }
    const[update,setupdate]  = useState(initialvalue);
    
    const handlechange  = (e)=>{
        setupdate({...update,[e.target.name]:e.target.value});
        // console.log(update);
    }

    const saveupdate  = async()=>{
        await updateprofile(update);
    }

    return (
        <>
            <div id="update">
            <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-lg-3 border-right update_body">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5 " id='up_profile'><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">Edogaru</span><span class="text-white-50">edogaru@mail.com.my</span><span> </span></div>

            <div class="mt-2 mb-2 text-center"><button  onClick={()=>{saveupdate()}} class="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
        <div class="col-lg-5 border-right">
            <div class="p-3 py-5" style={{    backgroundColor: "rgb(243, 241, 241)"}}>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels UP_labels">Name</label><input onChange ={(e)=>handlechange(e)}  type="text" name='firstname' class="form-control" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels UP_labels">Surname</label><input onChange ={(e)=>handlechange(e)} type="text" name='surname' class="form-control"  placeholder="surname" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels UP_labels">USN</label><input onChange ={(e)=>handlechange(e)} type="text" name='USN' class="form-control" placeholder="enter USN" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Mobile Number</label><input onChange ={(e)=>handlechange(e)} type="text" name='mobileno' class="form-control" placeholder="enter phone number" /></div>
                    <div class="col-md-12"><label class="labels UP_labels"> Email</label><input onChange ={(e)=>handlechange(e)} type="text" name='email' class="form-control" placeholder="Enter email" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">class 12 percentage</label><input onChange ={(e)=>handlechange(e)} type="text" name='class12marks' class="form-control" placeholder="enter class 12 percentage" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Class 10 CGPA/Percentage  </label><input onChange ={(e)=>handlechange(e)} type="text" name='class10marks' class="form-control" placeholder="enter lass 10 CGPA/Percentage" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Average cgpa</label><input onChange ={(e)=>handlechange(e)} type="text" name='averagecgpa' class="form-control" placeholder="enter Average cgpa" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Link to your resume</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkresume' class="form-control" placeholder="enter Link to your resume" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Link to your linkedin</label><input onChange ={(e)=>handlechange(e)} type="text" name='linklinkedin' class="form-control" placeholder="enter Link to your linkedin" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Link to your Git-Hub</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkgithub' class="form-control" placeholder="enter Link to your Git-Hub" /></div>
                    <div class="col-md-12"><label class="labels UP_labels">Link to your Glassdoor</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkglassdoor' class="form-control" placeholder="enter Link to your Glassdoor" /></div>
                    
                </div>
             
                
            </div>
        </div>
        <div class="col-lg-4">
            <div class="p-3 py-5" style={{    backgroundColor: "rgb(243, 241, 241)"}}>
                <div class="d-flex justify-content-between align-items-center experience"><span style={{fontWeight:"bold"}}>Other Details</span></div><br/>
                <div class="col-md-12"><label class="labels UP_labels">CLUBS INVOLVED</label><textarea onInput ={(e)=>handlechange(e)} class="form-control up_textarea" name='clubsinvolved' placeholder="experience " /></div> 
                <div class="col-md-12"><label class="labels UP_labels">CERTIFICATIONS</label><textarea onInput ={(e)=>handlechange(e)} class="form-control up_textarea" name='certifications' placeholder="Certification details" /></div>
                <div class="col-md-12"><label class="labels UP_labels">PROJECTS ANS INTERNSHIPS</label><textarea onInput ={(e)=>handlechange(e)} class="form-control up_textarea" name='projects' placeholder="projects and internship details" /></div>
                <div class="col-md-12"><label class="labels UP_labels">Others..</label><textarea onInput ={(e)=>handlechange(e)} class="form-control up_textarea" name='others' placeholder=" details" /></div>
            </div>
        </div>
    </div>
</div>
</div>
{/* </div> */}


        </>
    )
}

export default Update_profile;

