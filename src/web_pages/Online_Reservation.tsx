import './Online_Reservation.css'



function Online_Reservation() {
    return (

        <>

            <div className='resvation-head'>
                <h2>Make online reservation</h2>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam harum veritatis explicabo voluptates doloribus culpa repellat, dolor natus distinctio?</p>



                <div className='from-list'>

                    <input className="form-control form-control-lg" type="text" placeholder="Name"></input>

                    <select className="form-control form-control-options">
                        <option>2 persons</option>
                        <option>3 persons</option>
                        <option>4 persons</option>
                        <option>5 persons</option>
                        <option>6 persons</option>
                    </select>

                    <input className="form-control form-control-lg" type="text" placeholder=" Phone Number"></input>

                    <input className="form-control form-control-lg" type="date" placeholder="Email Address"></input>

                    <input className="form-control form-control-lg" type="type" placeholder="Email addres"></input>
                    <input className="form-control form-control-lg" type="time" placeholder="06:00 PM"></input>




                </div>
                <form className="form-inline">
                    <button className="btn btn-outline-success" type="button">RESERVE A TABLE</button>
                </form>

            </div>








        </>
    )
}

export default Online_Reservation