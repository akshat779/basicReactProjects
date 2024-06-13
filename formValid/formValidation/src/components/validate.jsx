import { useState } from "react"
import "./style.css"

function Validate(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorUsername,setErrorUsername] = useState("");
    const [errorEmail,setErrorEmail] = useState("");
    const [errorPassword,setErrorPassword] = useState("");
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("");
    const [userColor,setUserColor] = useState("");
    const [emailColor,setEmailColor] = useState("");
    const [passwordColor,setPasswordColor] = useState("");
    const [confirmPassowrdColor,setCofirmPasswordColor] = useState("");

    const validate = (e) => {
        e.preventDefault();
        if(username.length > 8){
            setErrorUsername("");
            setUserColor("green");
        }
        else{
            setErrorUsername("Username must be greater than 8 characters");
            setUserColor("red");
        }

        if(email.includes("@gmail")){
            setErrorEmail("");
            setEmailColor("green");
        }
        else{
            setErrorEmail("Email must contain @gmail");
            setEmailColor("red");
        }
        if(password.length > 8){
            setErrorPassword("");
            setPasswordColor("green");
        }
        else{
            setErrorPassword("Password must be greater than 8 characters");
            setPasswordColor("red");
        }
        if(password != "" && password === confirmPassword){
            setErrorConfirmPassword("");
            setCofirmPasswordColor("green");
        }
        else{
            setErrorConfirmPassword("Password and Confirm Password must be same");
            setCofirmPasswordColor("red");
        }
    }

    return(
        <>
        <div className="card">
            <div className="card-img"></div>
            <form >
                <input type="text" placeholder="Name" style={{borderColor:userColor}} value = {username} onChange={(e) => setUsername(e.target.value)}/>
                <p className="error">{errorUsername}</p>
                <input type="text" placeholder="Email" style={{borderColor:emailColor}} value = {email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="error">{errorEmail}</p>
                <input type="password" placeholder="Password" style={{borderColor:passwordColor}} value = {password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="error">{errorPassword}</p>
                <input type="password" placeholder="Confirm Password" style={{borderColor:confirmPassowrdColor}} value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <p className="error">{errorConfirmPassword}</p>
                <button className="submit-btn" onClick={validate}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Validate