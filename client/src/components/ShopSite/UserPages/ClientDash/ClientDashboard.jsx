import React from 'react'
import './ClientDashboard.scss'
import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { get_user_Info } from '../../../../js/Actions/userAction'
import EditIcon from '@mui/icons-material/Edit';
import { format } from 'timeago.js';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios'
function ClientDashboard() {
    const dispatch = useDispatch()
    let user=useSelector(state=>state.Authentication.user)
    let [userOrders,setUserOrders]=useState([])
    let clientId=user._id

  useEffect(()=>{
    const getCmdHistory=async()=>{
      try {
        const res= await axios.get(`/api/Orders/CmdHistory/${clientId}`)
        
        
        console.log(res.data)
        setUserOrders(res.data)
      } catch {
        
      }
    }
    getCmdHistory()
  },[])
 console.log(userOrders)

 
  return (
    <div> 
       {user===null?<h3>loading</h3> :<div className="myProfileDiv">
                <div className="Left">
                    <div className="Profile-pic">
                        <img className="pictureP"src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"></img>
                        <Link to={`/EditStudentPic/${user._id}`} className="editPicture"><CameraAltIcon/></Link>
                    </div>
                    <div className="Student-Info">
                        <div className="info">
                            <span>Nom et Prénom:</span>
                            <div className='EditInfo'>
                                <h4>{user.firstName} {user.lastName}</h4>
                                <Link to={`/EditStudentName/${user._id}`}><EditIcon/></Link>
                            </div>
                        </div>
                        <div className="info">
                            <span>Numéro du téléphone:</span>
                            <div className='EditInfo'>
                                <h4>{user.Address.Telephone}</h4>
                                <Link to={`/EditStudentName/${user._id}`}><EditIcon/></Link>
                            </div>
                        </div>
                        <div className="info">
                            <span>Addresse:</span>
                            <div className='EditInfo'>
                                <h4>{user.Address.CodePostal}, {user.Address.Ville},{user.Address.Pays}</h4>
                                <Link to={`/EditStudentName/${user._id}`}><EditIcon/></Link>
                            </div>
                        </div>
                        <div className="info">
                            <span>Email:</span>
                            <div className='EditInfo'>
                                <h4>{user.email} </h4>
                                <Link to={`/EditEmail/${user._id}`}><EditIcon/> </Link>
                            </div>
                        </div>
                        <div className="info">
                            <span>Password:</span>
                            <div className='EditInfo'>
                                <h4> Edit your Password </h4>
                                <Link to={`/EditStudentPassword/${user._id}`}><EditIcon/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {
                        userOrders.map(el=> <div className="cmdContainer">
                                                <div className="refetat">
                                                    <div className="infoCont">
                                                        <span className='titreG'>Référence:</span>
                                                        <span>{el.CmdRef}</span>
                                                    </div>
                                                    <div className="infoCont">
                                                        <span className='titreG'>Etat:</span>
                                                        <span> En cours</span>
                                                    </div>
                                                    <div className="infoCont">
                                                        <span className='titreG'>Date:</span>
                                                        <span>{format(el.createdAt)}</span>
                                                    </div>
                                                </div>
                                                <div className="livPaimentMeth">
                                                    <div className="infoCont">
                                                        <span className='titreG'>Méthode de Livraison:</span>
                                                        <span>{el.LivMeth}</span>
                                                    </div>
                                                     <div className="infoCont">
                                                        <span className='titreG'>Méthode de Paiment:</span>
                                                        <span>{el.PaimentMeth}</span>
                                                    </div>
                                                </div>
                                                <div className="Divtable">
                                                    <h3>Liste des Produis:
                                                    </h3>
                                                    <table >
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Reference</th>
                                                            <th>Nom du Produit</th>
                                                            <th>Prix UT</th>
                                                            <th>Quantité</th>
                                                            <th>Prix Totale</th>
                                                        </tr>
                                                    {el.TotalProducts.map(product=> <tr className="prodcontainer">
                                                        <td><img src={`assets/${product.ProductId.ProductImg}`} alt="" /></td>
                                                        <td className="ref">prodRef</td>
                                                        <td className="name">{product.ProductId.ProductName}</td>
                                                        <td className="">{product.ProductId.Price} dt</td>
                                                        <td>{product.Quantity}</td>
                                                        <td>{product.ProductId.Price*product.Quantity} dt</td>
                                                    </tr>
                                                        )}
                                                    </table>
                                                    <div className="totaltva">
                                                        <span>Prix total:</span>
                                                        <span>tva:</span> 
                                                    </div>
                                                </div>

                        {/* el.TotalProducts */}
                        </div>
                           )
                    }
                </div>
                
        </div>}
        </div>
  )
}

export default ClientDashboard