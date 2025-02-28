import "./Cards.css"
import display_img from '../assets/istockphoto-1358132627-612x612.jpg'
import card_img from "../assets/gallery img/2.jpg"
import card_img1 from "../assets//gallery img/7.jpg"
function Cards() {

    return (
        <>
            <div className="card-area">

                <div className="card1 cards">
                    <div className="quotes">
                        <div className="line"></div>
                        <p> Take a coffee break<br></br> or enjoy a meal.</p>
                    </div>

                    <div className="card-img">
                        <img src={card_img} alt="4134" />
                    </div>

                    <div className="despcription ">
                        <h2>Always amazing experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!</p>
                    </div>

                </div>



                <div className="card2 cards">

                    <div className="despcription despcription2">
                        <h2>Beautiful outdoor seating</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae similique asperiores consequatur! Nihil temporibus qui enim. Accusamus voluptates a, et quidem! Quo, et?</p>
                    </div>

                    <div className="quotes quotes1">
                        <div className="line"></div>
                        <p>Great variety of foods you will enjoy.</p>
                    </div>

                    <div className="card-img2">
                        <img className="card-img-container" src={card_img1} alt="rgrg" />
                    </div>

                </div>


                <div className="cards-display">
                    <div>
                        <img src={display_img} alt="ggb" />
                        <div className="img-text">
                            <div className="line"></div>
                            <p>Enjoy our specialty coffees and award winning doughnuts in a friendly atmosphere.</p>
                        </div>




                    </div>
                </div>



            </div >
        </>

    )
}
export default Cards