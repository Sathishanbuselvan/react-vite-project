import "./Dashboard.css"

import image9 from "./assets/download.webp"
import image5 from "./assets/images_5.webp"
import image7 from "./assets/images_7.webp"
import image8 from "./assets/images_8.webp"
import image3 from "./assets/images_3.webp"
import image2 from "./assets/images_2.webp"
import image1 from "./assets/images_1.webp"
import image4 from "./assets/images_4.webp"
import image6 from "./assets/images_6.webp"



function Dashboard(){
    return(
<>
<div>
        <h2>VEGTABLES ZOON</h2>
      </div>

      <div className="dashboard">


        <div className="onion">
          <img src={image9} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 5kg get 1kg free</p>
        </div>

        <div className="onion">
          <img src={image5} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 2kg get 3kg free</p>

        </div>


        <div className="onion">
          <img src={image7} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 6kg get 1kg free</p>

        </div>

        <div className="onion">
          <img src={image8} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 2kg get 1.5kg free</p>

        </div>
        ``
        <div className="onion">
          <img src={image3} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 2.5kg get 2.5kg free</p>
        </div>

        <div className="onion">
          <img src={image2} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 2kg get 1kg free</p>
        </div>

        <div className="onion">
          <img src={image1} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 2kg get 2kg free</p>
        </div>

        <div className="onion">
          <img src={image4} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy 1kg get 1kg free</p>
        </div>


        <div className="onion">
          <img src={image6} style={{ width: 300, height: 200 }} alt="" />
          <h3>red onion</h3>
          <p>Rs:100 /kg</p>
          <p>Buy kg get 1kg free</p>
        </div>

      </div>
</>
    )
}

export default Dashboard