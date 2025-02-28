import './Gallery.css'

import gallery_img1 from "../assets/gallery img/th (2).webp"
import gallery_img2 from "../assets/gallery img//OIP (1).webp"
import gallery_img3 from "../assets/gallery img/OIP (2).webp"
import gallery_img4 from "../assets/gallery img/th.webp"
import gallery_img5 from "../assets/gallery img/OIP.webp"
import gallery_img6 from "../assets/gallery img/th (3).webp"
import gallery_img7 from "../assets/gallery img/OIP (4).webp"
import gallery_img8 from "../assets//gallery img/OIP (3)..webp"
import gallery_img9 from "../assets//gallery img/download.webp"
import gallery_img10 from "../assets//gallery img/download1.webp"



function Gallery() {
	return (
		<><div className="gallery-title">
			<h2>Our gallery</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>

			<div className="gallery">

				<div className="colm-1 colm">
					<img className='img-container' src={gallery_img1} style={{ height: "600px" }} alt="" />
					<img className='img-container' src={gallery_img2} style={{ height: "300px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img3} style={{ height: "420px" }} alt="ecdm" />
				</div>
				<div className="colm-2 colm">
					<img className='img-container' src={gallery_img5} style={{ height: "300px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img10} style={{ height: "700px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img4} style={{ height: "300px" }} alt="ecdm" />
				</div>
				<div className="colm3 colm">
					<img className='img-container' src={gallery_img6} style={{ height: "400px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img7} style={{ height: "300px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img8} style={{ height: "375px" }} alt="ecdm" />
					<img className='img-container' src={gallery_img9} style={{ height: "200px" }} alt="ecdm" />
				</div>

			</div>

			<div className="newspaper">
				<div className='news-titile'>
					<h2>News paper</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima quasi fugit, rerum tenetur ullam sequi voluptates animi, aperiam, quae laudantium voluptate. Consequatur tempora veritatis reprehenderit. Ea ut laborum doloribus.</p>
				</div>
				<div className="input-group">
					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
					<button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
				</div>

			</div>
		</>
	)
}

export default Gallery