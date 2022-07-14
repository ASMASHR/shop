import React from 'react'
import './StudioHome.scss'
import StudioNav from '../StudioNavBar/StudioNav'
function StudioHome() {
    let info=[{im:"",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto ipsa architecto perferendis incidunt repellat explicabo atque aperiam minima harum. Cum, aliquid. Officia nesciunt eligendi vero tenetur culpa a natus!"},
{im:"",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto ipsa architecto perferendis incidunt repellat explicabo atque aperiam minima harum. Cum, aliquid. Officia nesciunt eligendi vero tenetur culpa a natus!"},
{im:"",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto ipsa architecto perferendis incidunt repellat explicabo atque aperiam minima harum. Cum, aliquid. Officia nesciunt eligendi vero tenetur culpa a natus!"},
{im:"",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto ipsa architecto perferendis incidunt repellat explicabo atque aperiam minima harum. Cum, aliquid. Officia nesciunt eligendi vero tenetur culpa a natus!"},
{im:"",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto ipsa architecto perferendis incidunt repellat explicabo atque aperiam minima harum. Cum, aliquid. Officia nesciunt eligendi vero tenetur culpa a natus!"},
]
  return(
    <div className='StudioHome'>
        <StudioNav/>
        <div className="Nouveaute">
          <div className="classique">Album photo Classique</div>  
           <div className="mariage">Album photo Mariage</div> 
            <div className="autre"> Autre</div>
           
            
        </div>
        <div className="imgContainer">
            <div className="FirstImg">
                <img src="https://nordicaphotography.com/wp-content/uploads/2016/04/Homepage4-1600x760.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis adipisci! Explicabo, repudiandae illo! Praesentium labore debitis reprehenderit voluptatem repellendus natus accusantium doloremque, est, dolores itaque officiis temporibus. Consequuntur, eius.</p>
            </div>
            <div className="SecImg">
                <img src="https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1478878754708-Y6VHK0XRDTZC2M4WAVLS/SeaGrass.jpg?format=1000w" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis adipisci! Explicabo, repudiandae illo! Praesentium labore debitis reprehenderit voluptatem repellendus natus accusantium doloremque, est, dolores itaque officiis temporibus. Consequuntur, eius.</p>
            </div>
                       <div className="ThirdImg">
                <img src="https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1480355486842-6ZQPURO5Q4S1GQQDVUV0/EOWilson2Ab.jpg?format=300w" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis adipisci! Explicabo, repudiandae illo! Praesentium labore debitis reprehenderit voluptatem repellendus natus accusantium doloremque, est, dolores itaque officiis temporibus. Consequuntur, eius.</p>
            </div>
                       <div className="fourtImg">
                <img src="https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1478279656553-QCTNYDKL2DDFVUVZQ586/Personal+Favorites-12.jpg?format=1000w" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis adipisci! Explicabo, repudiandae illo! Praesentium labore debitis reprehenderit voluptatem repellendus natus accusantium doloremque, est, dolores itaque officiis temporibus. Consequuntur, eius.</p>
            </div>
                       <div className="fifthImg">
                <img src="https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1488918905256-R39B4AQQ3ESEH89S60I2/IncaStoneWork.jpg?format=750w" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis adipisci! Explicabo, repudiandae illo! Praesentium labore debitis reprehenderit voluptatem repellendus natus accusantium doloremque, est, dolores itaque officiis temporibus. Consequuntur, eius.</p>
            </div>
        </div>

        </div>
  )
}

export default StudioHome