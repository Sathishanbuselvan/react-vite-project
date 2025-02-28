import './Menu_option.css'

import img from '../chat img/OIP.webp'
import img1 from '../chat img/OIP1.webp'
import img2 from '../chat img/OIP2.webp'
import img3 from '../chat img/OIP3.webp'
import img4 from '../chat img/OIP4.webp'
import img5 from '../chat img/OIP5.webp'
import img6 from "../chat img/OIP 6.webp"
import img7 from '../chat img/OIP7.webp'
import img8 from '../chat img/indian-samosa.webp'

function Menu_option() {
    return (
        <>
            <h2 className='menu-opt' style={{ textAlign: 'center' }}>Menu Option</h2>
            <div className='menu-area'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum inventore ex asperiores quod aut itaque delectus, unde nisi corrupti minima incidunt at doloremque, iure accusantium quam officiis pariatur veritatis odio?</p>
            </div>

            <div className="menu-nav">

                <span>MAINS</span>
                <span>LUNCH</span>
                <span>DINNER</span>
                <span>DRINKS</span>

            </div>

            <div className="cards-area">
                <div className='container'>
                    <img src={img} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section >
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-25</span>
                </div>

                <div className='container'>
                    <img src={img1} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-60</span>
                </div>

                <div className='container'>
                    <img src={img2} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-90</span>
                </div>

                <div className='container' >
                    <img src={img3} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-70</span>
                </div>

                <div className='container'>
                    <img src={img4} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-95</span>
                </div>

                <div className='container'>
                    <img src={img6} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-55</span>
                </div>

                <div className='container'>
                    <img src={img7} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-45</span>
                </div>

                <div className='container'>
                    <img src={img3} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-70</span>
                </div>

                <div className='container'>
                    <img src={img3} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-80</span>
                </div>

                <div className='container'>
                    <img src={img2} style={{ height: 100, width: 100 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-85</span>
                </div>
            </div>

            {/* next section */}

            <div className="feature-dish">
                <section>
                    <h2>Our featured dishes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sunt quibusdam veniam? Alias sequi dolores ducimus repellat veritatis modi nostrum quasi possimus quaerat molestiae quas, ab pariatur sint nesciunt accusamus.</p>
                </section>
            </div>
            <div className='feature-dish-card'>
                <div>
                    <img src={img1} style={{ height: 200, width: 200 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-60</span>
                </div>



                <div>
                    <img src={img} style={{ height: 200, width: 200 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-70</span>
                </div>

                <div>
                    <img src={img8} style={{ height: 200, width: 200 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-70</span>
                </div>

                <div>
                    <img src={img7} style={{ height: 200, width: 200 }} alt="wjdkgwiud" />
                    <section>
                        <h4>WWF's Symbol</h4>
                        <p>Theoriginerred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
                    </section>
                    <span>$-70</span>
                </div>



            </div>




        </>
    )
}

export default Menu_option