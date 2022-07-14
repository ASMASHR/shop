import React,{useState} from 'react'
import './AddMarque.scss'
import {useSelector,useDispatch} from 'react-redux'
import Sidebar from '../../sidebar/Sidebar'
import { Add_Marque } from '../../../js/Actions/MarquesAction'
function AddMarque() {
  
      let dispatch=useDispatch()
   let [newMarque,setnewMarque]=useState({
   MarqueName:"",
MarqueDesc:"",
MarqueImg:""
      
    } )
    const [img, setImg] = useState(null)

    let handleChange = (e) =>setnewMarque({ ...newMarque, [e.target.name]: e.target.value })
  let addMarque=(e)=>{
    let Newpic = new FormData();
  Newpic.append('photo', img[0]);
   console.log(Newpic.get('photo'))
   
e.preventDefault()
let MarqueName=newMarque.MarqueName
let MarqueDesc=newMarque.MarqueDesc
    dispatch(Add_Marque(MarqueName,MarqueDesc,Newpic))
  }
  return (
        <div className="categoriesList">

  <Sidebar/>
  
  <div className="left">
    <form enctype="multipart/form-data">
    <div className="inputContainer">
                  <p>Marque</p> 
                    <input type="text" name="MarqueName" onChange={handleChange} id="" />
        </div>
        <div className="inputContainer">
                  <p>Description</p> 
                    <input type="text" name="MarqueDesc" onChange={handleChange} id="" />
        </div>
        <div className="inputContainer">
                  <p>IMG</p> 
                    <input type="file" name="MarqueImg" onChange={(e)=>setImg(e.target.files)} id="" />
        </div>
        <button onClick={addMarque}>Add</button>
   </form>
    </div>
    </div>
  )
}

export default AddMarque