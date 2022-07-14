import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import {gethauthUser, register} from '../../js/Actions/AuthAction'
import './register.scss'
import { Link,useHistory } from "react-router-dom";
function Register() {
    let dispatch = useDispatch()
    let history=useHistory()



    const [formData,setformData]=useState({
        firstName:"",lastName:"",Address:"",email:"", password:"", age:0, gender:"",phoneNumber:0
    })
    const handleFormChange=(e)=>{setformData({...formData,[e.target.name]:e.target.value})}
    const handleConfirm=()=>{
        dispatch(register(formData))
        dispatch(gethauthUser())
    
        history.push("/AdminDashboard")
        }
     return (
    <div className="wrapper fadeInDown" >
        <div id="formContent">
            <div className="Registertop">            
                <h2>Inscrivez-vous à </h2>
                <h2 className="SiteName"> Fourniture.tn</h2>
            </div>
            <form>
                <input  className="InputChamp" onChange={handleFormChange} type="text" name="firstName" placeholder="Enter Your First Name.." autoComplete="userName" ></input>             
                <input  className="InputChamp" onChange={handleFormChange} type="text" name="lastName" placeholder="Enter Your Last Name.." autoComplete="userLastName"></input>
                <input  className="InputChamp" onChange={handleFormChange} type="text" name="Address" placeholder="Enter Your Adress.." autoComplete="userAddress"></input>
                <input  className="InputChamp" onChange={handleFormChange} type="text" name="phoneNumber" placeholder="Enter Your phone Number.." autoComplete="usernum"></input>
                
                <input  className="InputChamp" onChange={handleFormChange} type="email" name="email" placeholder="Enter Your Email.." autoComplete="userEmail"></input>
                <input  className="InputChamp" onChange={handleFormChange} type="password" name="password" placeholder="Enter Your password.." autoComplete="user-Password"></input>   
                <input  className="InputChamp" onChange={handleFormChange} type="text" name="age" placeholder="Enter Your Age.." autoComplete="userAge"></input>
                <div className="genderDiv">
                    <label className="genderLabel" htmlFor="genderMale"> 
                        <input type="radio" name="gender" id="genderMale" onChange={handleFormChange} value="male" />Male  
                    </label>
                    <label  className="genderLabel" htmlFor="genderFemale" > 
                        <input type="radio" name="gender" id="genderFemale" onChange={handleFormChange} value="female"/>Female
                    </label>
                </div>
            
            <Link to="/"><input type="reset" className="Inputbutton"  value="Cancel"/></Link>
           <input type="submit" className="Inputbutton"  value="Confirm"onClick={()=>{handleConfirm()}} />
           </form>
             
            <div className="formFooter">
                    <span>Already registered </span> 
                    <Link className="underlineHover" to="/Login">log in?</Link>
                
            </div>
        </div>
        
</div>
)}

export default Register