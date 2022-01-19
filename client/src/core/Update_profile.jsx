import React from 'react'
import { useState } from 'react';
import "../assets/css/Update_profile.css";
import { updateprofile } from '../services/api';
import Header from '../components/Header';
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
                <Header/>
            <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-lg-3 border-right update_body">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5 " id='up_profile'><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span className="font-weight-bold">Edogaru</span><span className="text-white-50">edogaru@mail.com.my</span><span> </span></div>

            <div className="mt-2 mb-2 text-center"><button  onClick={()=>{saveupdate()}} className="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
        <div className="col-lg-5 border-right">
            <div className="p-3 py-5" style={{    backgroundColor: "rgb(243, 241, 241)"}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels UP_labels">Name</label><input onChange ={(e)=>handlechange(e)}  type="text" name='firstname' className="form-control" placeholder="first name" /></div>
                    <div className="col-md-6"><label className="labels UP_labels">Surname</label><input onChange ={(e)=>handlechange(e)} type="text" name='surname' className="form-control"  placeholder="surname" /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels UP_labels">USN</label><input onChange ={(e)=>handlechange(e)} type="text" name='USN' className="form-control" placeholder="enter USN" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Mobile Number</label><input onChange ={(e)=>handlechange(e)} type="text" name='mobileno' className="form-control" placeholder="enter phone number" /></div>
                    <div className="col-md-12"><label className="labels UP_labels"> Email</label><input onChange ={(e)=>handlechange(e)} type="text" name='email' className="form-control" placeholder="Enter email" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">class 12 percentage</label><input onChange ={(e)=>handlechange(e)} type="text" name='class12marks' className="form-control" placeholder="enter className 12 percentage" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">class 10 CGPA/Percentage  </label><input onChange ={(e)=>handlechange(e)} type="text" name='class10marks' className="form-control" placeholder="enter lass 10 CGPA/Percentage" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Average cgpa</label><input onChange ={(e)=>handlechange(e)} type="text" name='averagecgpa' className="form-control" placeholder="enter Average cgpa" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Link to your resume</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkresume' className="form-control" placeholder="enter Link to your resume" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Link to your linkedin</label><input onChange ={(e)=>handlechange(e)} type="text" name='linklinkedin' className="form-control" placeholder="enter Link to your linkedin" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Link to your Git-Hub</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkgithub' className="form-control" placeholder="enter Link to your Git-Hub" /></div>
                    <div className="col-md-12"><label className="labels UP_labels">Link to your Glassdoor</label><input onChange ={(e)=>handlechange(e)} type="text" name='linkglassdoor' className="form-control" placeholder="enter Link to your Glassdoor" /></div>
                    
                </div>
             
                
            </div>
        </div>
        <div className="col-lg-4">
            <div className="p-3 py-5" style={{    backgroundColor: "rgb(243, 241, 241)"}}>
                <div className="d-flex justify-content-between align-items-center experience"><span style={{fontWeight:"bold"}}>Other Details</span></div><br/>
                <div className="col-md-12"><label className="labels UP_labels">CLUBS INVOLVED</label><textarea onInput ={(e)=>handlechange(e)} className="form-control up_textarea" name='clubsinvolved' placeholder="experience " /></div> 
                <div className="col-md-12"><label className="labels UP_labels">CERTIFICATIONS</label><textarea onInput ={(e)=>handlechange(e)} className="form-control up_textarea" name='certifications' placeholder="Certification details" /></div>
                <div className="col-md-12"><label className="labels UP_labels">PROJECTS ANS INTERNSHIPS</label><textarea onInput ={(e)=>handlechange(e)} className="form-control up_textarea" name='projects' placeholder="projects and internship details" /></div>
                <div className="col-md-12"><label className="labels UP_labels">Others..</label><textarea onInput ={(e)=>handlechange(e)} className="form-control up_textarea" name='others' placeholder=" details" /></div>
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

