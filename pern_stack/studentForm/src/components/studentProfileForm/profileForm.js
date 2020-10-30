import React from 'react';
import './profileForm.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGraduate,faGraduationCap,faUser,faIdCardAlt,faEnvelope,faBuilding,faAward,faPercentage} from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';


const ProfileForm = () => {

    const{register,handleSubmit} = useForm();
    const onSubmit = async(data) => {
        let dept_id;
        if(data.dept === "CSE"){
            dept_id = 1;
        }
        else if(data.dept === "IT"){
            dept_id = 2;
        }
        else if(data.dept === "ECE"){
            dept_id = 3;
        }
        else if(data.dept === "EEE"){
            dept_id = 4;
        }
        const body = {name:data.name,regnumber:data.regno,email:data.email,fk_dept:dept_id,cgpa:data.cgpa,twelve_mark:data.hsemark,twelve_board:data.hseboard,
                      ten_mark:data.sslcmark,ten_board:data.sslcboard}

        await Axios.post('http://localhost:5000/api/profile',body)
                    .then(res => console.log(res))
                    .catch(err=> console.log(err));              
    }

    return(
        <div className="stu-Profile-Form">
            
            <div className="form-container">
            <h1 className="stu-profile-form-header">Student Profile
            <span className="header-icon"><FontAwesomeIcon icon={faUserGraduate} color="#000000"/></span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="header-icon"><FontAwesomeIcon icon={faUser} color="#000000"/></span>  
                <label className="stu-profile-form-label">Name</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Name" required maxLength="50"
                name="name" ref={register}/>

                <span className="header-icon"><FontAwesomeIcon icon={faIdCardAlt} color="#000000"/></span>    
                <label className="stu-profile-form-label">Registration Number</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Register Number" required minLength="9" maxLength="9"
                name="regno" ref={register}/>
                
                <span className="header-icon"><FontAwesomeIcon icon={faEnvelope} color="#000000"/></span>
                <label className="stu-profile-form-label">Email address</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Email Address" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                 name="email" ref={register}/>
                 
                <span className="header-icon"><FontAwesomeIcon icon={faBuilding} color="#000000"/></span>
                <label className="stu-profile-form-label">Department</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Department like CSE or ECE" required name="dept" ref={register}>
                    <option value="" readonly="true" hidden="true" selected>Choose Your Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>   
                

                <span className="header-icon"><FontAwesomeIcon icon={faAward} color="#000000"/></span>    
                <label className="stu-profile-form-label">Current CGPA</label><br/>
                <input className="stu-profile-form-field" placeholder="Your CGPA as per last semester" required pattern="[0.0-9.0]+"
                  name="cgpa"  ref={register}/>

                <span className="header-icon"><FontAwesomeIcon icon={faPercentage} color="#000000"/></span>   
                <label className="stu-profile-form-label">12th Standard Marks in Percentage</label><br/>
                <input className="stu-profile-form-field" placeholder="Enter your 12th Std Percentage" required pattern="[0.0-9.0]+"
                  name ="hsemark" ref={register}/>

                <span className="header-icon"><FontAwesomeIcon icon={faGraduationCap} color="#000000"/></span>  
                <label className="stu-profile-form-label">12th Standard Board</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Board of Examination in 12th Std" required minLength="3"
                    name="hseboard" ref={register}>
                        <option value="" readonly="true" hidden="true" selected>Choose Your Board of Examination</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                    </select>

                <span className="header-icon"><FontAwesomeIcon icon={faPercentage} color="#000000"/></span>   
                <label className="stu-profile-form-label">10th Standard Marks in Percentage</label><br/>
                <input className="stu-profile-form-field" placeholder="Enter your 10th Std Percentage" required pattern="[0.0-9.0]+"
                    name="sslcmark" ref={register}/>

                <span className="header-icon"><FontAwesomeIcon icon={faGraduationCap} color="#000000"/></span>  
                <label className="stu-profile-form-label">10th Standard Board</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Board of Examination in 10th Std" required minLength="3"
                    name="sslcboard" ref={register}>
                        <option value="" readonly="true" hidden="true" selected>Choose Your Board of Examination</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                    </select>

                <input className="stu-profile-form-submit" type="submit" value="SUBMIT"/>
            </form>
            </div>
        </div>
    );

}

export default ProfileForm;