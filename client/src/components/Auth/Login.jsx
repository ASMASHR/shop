import React,{ useState} from 'react'
import './login.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch} from "react-redux";
import { Link,useHistory } from "react-router-dom";

import { login } from "../../js/Actions/AuthAction";
function Login() {

 let history=useHistory()
 let dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleConfim = () => {
    dispatch(login(formData))
    history.push("/Dashboard")

  };
    return (
        <div className="wrapper fadeInDown" >
            <div id="formContent">
              <h2>Connectez-vous à votre compte</h2>
              <div className="top">
                
                  <span className='TopInfo'>
                   Se connecter avec :
                   </span>
                <div className="ConnectIcons">
                   <Link to="/">
                    <div className="connectFacebook">
                      <FacebookIcon className='fbIcon'/>
                        <span>votre compte Facebook</span>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="connectGoogle">
                        <GoogleIcon/>
                        <span>votre compte google</span>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className="mid">
                <span className="midInfo">
                  où bien:
                </span>
                <form>
                  <input id="login" type="email" className="InputChamp" autoComplete="current-user" name="email" placeholder="Votre Email..."onChange={handleFormChange}/>
                  <input  className="InputChamp" name="password" autoComplete="current-password" type="password" placeholder="Votre mot de passe..." onChange={handleFormChange}/>
                  <div className="underlineHover">
                    <Link to="SetNewPass">Forgot your Password?</Link>
                  </div>
                  <Link to="/"><input className="Inputbutton" type="reset"  value="Cancel"/></Link>
                  <input type="submit" className="Inputbutton" value="Log In"onClick={handleConfim} />
                </form>
                </div>
                <div className="formFooter">
                  
                    <span>you are not member yet? </span> 
                    <Link className="underlineHover" to="/Register">Register Now</Link>
                </div>
                
              </div>
        </div>
    )
}

export default Login