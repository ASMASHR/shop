import React,{useState} from 'react';
import NavBar from '../navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import './ConfirmationCmd.scss';
import Calendar from 'react-calendar'
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Add_Command} from '../../../js/Actions/CommandeAction'
import { Delet_Card_Items } from '../../../js/Actions/CartAction';
function ConfirmationCmd() {
  let dispatch=useDispatch()
  let history=useHistory()
  function strRandom(o) {
  var a = 10,
      b = 'abcdefghijklmnopqrstuvwxyz',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}
let a=strRandom({
  // includeUpperCase: true,
  includeNumbers: true,
  length: 3,
  startsWithLowerCase: true
});
    
  let [CalendarShow,setCalendarShow]=useState(false)
  const [value, SetValue] = useState(new Date());
  let [testCode,setTestCode]=useState(false)
  let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart
  let  Prods=[]
  for (let i=0;i<cartItems.length;i++)
  {
    Prods.push({ProductId:cartItems[i].product,Quantity:cartItems[i].qty})
  }
  console.log("Prods",Prods)
  let [add,setAdd]=useState({
      CodePostal:"",
      Telephone:"",
      Ville:"",
      Pays:""
  })

  let [verifEmail,setVerifEmail]=useState(false)
  // Methode de Livraison  Mode de Paiment 
  let [userInfo,setUserInfo]=useState({
    firstName:"",
    lastName:"",
    email:"",
    verifEmail:"",
    birthDay:"",
    password:"",
    Address:{
    }
  })
    // console.log("userr",userInfo)
  let [CmdInfo,setCmdInfo]=useState(
 { CmdRef:`Ref_${a}`,
   TotalProducts:Prods,
LivMeth:"",
PaimentMeth:""}
)
let UpdateserInfo = (e) =>setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
let UpdateAdress=(e)=>{setAdd({ ...add,[e.target.name]: e.target.value })
setUserInfo({ ...userInfo,Address:add})}
let [testNum,settestNum]=useState(false)

let FillDay=()=>{
setCalendarShow(!CalendarShow)
   setUserInfo({ ...userInfo,birthDay:value.getDate() + "/" + (value.getMonth() + 1)+ "/" + value.getFullYear()})
 }


//  button addCommande
 let AddCommande=(e)=>{
//    e.preventDefault()
//    if((userInfo.firstName!=="")&&(userInfo.lastName!=="")&&(userInfo.email!=="")&&(userInfo.verifEmail!=="")&&(userInfo.birthDay!=="")&&(userInfo.Address.CodePostal!=="")&&(userInfo.Address.Telephone!=="")&&(userInfo.Address.Ville!=="")&&(userInfo.Address.Pays!==""))
//    {if((userInfo.email!==userInfo.verifEmail))
//     {setVerifEmail(true)
//       }
//       else
//       {
//     if(CmdInfo.LivMeth==="")
//   console.log("vous devez choisir une methode de livaison")
//        if(CmdInfo.PaimentMeth==="")
//   console.log("vous devez choisir une methode de paiment")
// else
// {  
  // console.log("we are ready!")
  // setCmdInfo({...CmdInfo,user:userInfo})
  // console.log("first",CmdInfo)
  // console.log("firstdsdzer",userInfo)
  e.preventDefault()
dispatch(Add_Command(userInfo,CmdInfo))
// history.push('/Dashboard')

  
// }

// }

// }
//   else
//   alert("vous devez remplir tous les champs ")
 }

//  test number phone
 let testkeyPress=(event)=>{
  console.log("eeeee")
  let numTab=["0","1","2","3","4","5","6","7","8","9"]
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
   console.log("first",numTab.indexOf(keyValue))
  //  if (/\+|-/.test(keyValue)) {
  //    
   if(numTab.indexOf(keyValue)===-1)
  { settestNum(true)
   event.preventDefault();}
   else
   settestNum(false)

 }

//  test code postal
  let testCodPostal=(event)=>{

  let numTab=["0","1","2","3","4","5","6","7","8","9"]
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
   if(numTab.indexOf(keyValue)===-1)
  { setTestCode(true)
   event.preventDefault();}
   else
   setTestCode(false)

 }
  return <div className='confirmationContainer'>
<form enctype="multipart/form-data">
    <div className="center">
          <div className="leftDiv">
            <div className="firstCol">
              <p className='vosDetails'> <PersonIcon className='UserIcon'/> Vos Détails </p>
              <button><Link to='/Login'> S'identifier</Link></button> 
            </div>  
            <div className="secondCol">
                  <div className="inputContainer">
                   <p>Nom: *</p> 
                    <input type="text" name="lastName" onChange={UpdateserInfo} id="" />
                  </div>
                    <div className="inputContainer">
                    <p>Prénom: *</p>
                    <input type="text" name="firstName" id="" onChange={UpdateserInfo} />
                  </div>
                    {verifEmail&& <span>les deux email ne sont pas identique</span> }
                    <div className="inputContainer">
                      <p>Email: *</p>
                      <input type="text" name="email" id=""  onChange={UpdateserInfo}  />
                    </div>
                    <div className="inputContainer">
                    <p>Confirmez Votre Email: *</p>
                    
                    <input type="text" name="verifEmail" onChange={UpdateserInfo} id="" />
                  </div>
                  {/*  */}
                  <div className="inputContainer">
                    <p>Mot de Passe: *</p>
                    <input type="password" name="password" onChange={UpdateserInfo} id="" />
                  </div>
                    <div className="inputContainer">
                    <p>Date De Naissance: *</p>
                    <div className="inputClick">
                      {/* value={dN} */}
                        <input type="text" name="birthDay" id="" value={value.getDate() + "/" + (value.getMonth() + 1)+ "/" + value.getFullYear()}/><button onClick={FillDay}className="CalShow"><DateRangeIcon className='DateIcon'/></button>
                    </div>
                    {CalendarShow&&<Calendar className='CalendarDiv' onChange={SetValue} value={value} maxDate={new Date(Date.now())}/>}
                  </div>
                  {/* <div className="chec">
                      <div className="CheckCreation"> 
                            <input type="checkBox" />
                            <span>Créez un compte et profitez des avantages d'un client enregistré.</span>
                      </div> 

                  </div>*/}
            </div>
            <div className="thirdCol">
              <p className='AdressT'>Adresse de Livraison</p>
                  <div className="inputContainer">
                    <p>Pays: *</p>
                    <input type="text" name="Pays" id=""  onChange={UpdateAdress} />
                  </div>
                  <div className="inputContainer">
                    <p>Ville: *</p>
                    <input type="text" name="Ville" id="" onChange={UpdateAdress}  />
                  </div>
                  <div className="inputContainer">
                    <p>Code Postal: *</p>
                    {testCode&&<span>le code postal ne doit contenir que des numero</span>}
                    <input type="text" name="CodePostal" id="" onChange={UpdateAdress} onKeyPress={testCodPostal} maxLength="4"/>
                  </div>
                  
                  <div className="inputContainer">
                    <p>Telephone: *</p> 
                    {testNum&&<span>le numero du telephone ne doit contenir que des numero</span>}
                    <input type="text" name="Telephone" id="" onChange={UpdateAdress} onKeyPress={testkeyPress}maxLength="8"/>
                   
                  </div>
              
            </div>
          </div>
          <div className="rightDiv">
            <div className="topDiv">
                    <div className="MethodLivraison">
                      <div className="headDiv">
                        <LocalShippingIcon className='carIcon'/>
                        <p>Methode de Livraison</p>
                      </div>
                      <div className="bodyDiv">
                          <div className="domicie">
                              <input type="radio" name="LivMeth" onChange={()=>setCmdInfo({...CmdInfo,LivMeth:"Livraison à domicile"})}/>
                              <span> Livraison à domicile</span>
                          </div>
                          <div className="lib">
                            <input type="radio"name="LivMeth" onChange={()=>setCmdInfo({...CmdInfo,LivMeth:"Retrait de Notre Livrairie"})} />
                            <span>Retrait de Notre Livrairie</span> 
                          </div>
                      </div>
                              
                            
                            
                    </div>
                    <div className="MethodPaiment">
                      <div className="headDiv">
                        <CreditCardIcon  className='CreditIcon'/>
                        Mode de Paiment
                      </div>
                      <div className="bodyDiv">
                        <div className="espece" >
                        <input type="radio" name="PaimentMeth" onChange={()=>setCmdInfo({...CmdInfo,PaimentMeth:"Paiement Par espéce"})}/>
                        <span>Paiement Par espéce</span> 
                        </div>
                        <div className="cheque">
                          <input type="radio" name='PaimentMeth'onChange={()=>setCmdInfo({...CmdInfo,PaimentMeth:"Paiement par chèque"})} />
                          <span>Paiement par chèque </span> 
                        </div>
                      </div>
                          
                          
                    </div>
            </div>
            <div className="bottomDiv">
              <div className="headDIV">
                  <ShoppingCartIcon className='ShoppingIcon'/>
                  <p>Récapitulatif de la commande</p> 

              </div>
              <div className="bodyDIV">
                {/*     */}
                {
                  cartItems.map(el=> <div className="Itemcontainer">
                                        <img src={`/assets/${el.imgURL}`} alt="" />
                                        <p className='prodName'>{el.name}</p>  
                                         <p>Qté: {el.qty}</p>
                                         <p>Prix Total: {el.price*el.qty} DT</p>
                                       
                  </div> )
                }
              </div>
          </div>
          <div className="ConfirmDiv">
            <Link to="/CheckOut">Poursuivre mes Achats</Link> 
            <button onClick={AddCommande}>Je Confirme Ma Commande!</button>  
          </div>
          </div>
    </div>
  </form>
  </div>;
}

export default ConfirmationCmd;
