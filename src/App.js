import './App.css';
import image from './asscets/box1_image (1).jpg';
import image1 from './asscets/box2_image.jpg';
import image2 from './asscets/box3_image.jpg';
import image3 from './asscets/box4_image.jpg';
import image4 from './asscets/MjJkZGVlZDYt-OGRmN2JmYWEt-w379._SY304_CB410698465_.jpg';
import image5 from './asscets/OWFhYjJmNGIt-NzIwODU5ZmIt-w379._SY304_CB405958196_.jpg';
import image6 from './asscets/XCM_CUTTLE_1373515_1950504_US_379x304_1X_en_US._SY304_CB639569634_.jpg';
import image7 from './asscets/YjAwMjVmYjUt-YmMzZGJjMzYt-w379._SY304_CB410321238_.jpg';
import image8 from './asscets/61gGY9AfeSL._SX3000_.jpg';
import image9 from './asscets/amazon_logo.png';


function App() {
  return (
    <div>
     <header>
        <div id="nav1" className="navbar" >
            <div className="nav-logo border">
                <div className="logo" style={{backgroundImage:`url(${image9})`}}>
                </div>
            </div>
            <div className="nav-address border">
                <p className="add-first"> Deliver to </p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-second">India</p>
                </div>
            </div>
            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input className="search-input" placeholder="Search Amazon"/>
                <div className="search-icon"></div>
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        <div className="nav-signin border">
            <p><span>Hello,Sign In</span></p>
            <p className="nav-second">Account & Lists</p>
        </div>
        <div className="nav-return border">
            <p><span>Returns</span></p>
            <p className="nav-second"> & Orders</p>
        </div>
        <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
        </div>
        </div>
        <div className="panel">
            <div className="panel-all">
                <i className="fa-solid fa-bars"></i>
                All
                </div>
            <div className="panel-ops">
                <p>Today's Deals</p>
               <p>Customer Services</p>
                <p>Registery</p>
                <p>Gift Cards</p>
                <p>Sell</p>
            </div>
            <div className="panel-deals">
                Shop deals in Electronics
            </div>
        </div>
    </header>
    <div className="hero-section" style={{backgroundImage:`url(${image8})`}}>
        <div className="hero-msg">
            <p>You are on amazon.com.You can also shop on Amazon India for millions of products with fast local delivery. <a>Click here to go to amazon.in</a></p>
        </div>
    </div>
    <div className="shop-section">
        <div className="box">
            <div className="box-content">
            <h2>Health & Personal Care</h2>
            <div className="box-img" >
              <img className="img" src={image1}alt='image'/>
              </div>
              <div>
            <p>See more</p>
            </div>
        </div>
    </div>
    <div className="box">
        <div className="box-content">
        <h2>Fashion & Clothing</h2>
        <div className="box-img" >
        <img className="img" src={image}alt='image'/>
        </div>
        <div>
        <p>See more</p>
        </div>
    </div>
</div>
<div className="box">
    <div className="box-content">
    <h2>Furnitures</h2>
    <div className="box-img" >
    <img className="img"  src={image2}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
<div className="box">
    <div className="box-content">
    <h2>Mobiles & Accesorries</h2>
    <div className="box-img" >
    <img className="img" src={image3}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
<div className="box">
    <div className="box-content">
    <h2>Electronics</h2>
    <div className="box-img" >
    <img className="img" src={image7}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
<div className="box">
    <div className="box-content">
    <h2>New Arrival Toys</h2>
    <div className="box-img" >
    <img className="img" src={image6}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
<div className="box">
    <div className="box-content">
    <h2>Wood Furnitures</h2>
    <div className="box-img" >
    <img className="img" src={image5}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
<div className="box">
    <div className="box-content">
    <h2>Plants</h2>
    <div className="box-img" >
    <img className="img" src={image4}alt='image'/>
    </div>
    <div>
    <p>See more</p>
    </div>
</div>
</div>
    </div>
    <footer>
        <div className="foot-panel" href={"#nav1"}>
            Back To Top
        </div>
        <div className="foot-panel1">
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About Amazon</a>
                <a>Investor Relaton</a>
                <a>amazon Devices</a>
                <a>Amazon Science </a>
            </ul>
            <ul>
                <p>Connect with Us</p>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Instagram</a>
               
            </ul>
            <ul>
                <p>Make Money with Us</p>
                <a>Sell on Amazon</a>
                <a>Sell under Amazon Accelerator</a>
                <a>Protect and Build Your Brand</a>
                <a>Amazon Global Selling</a>
                <a>Become an Affiliate</a>
                <a>Fulfilment by Amazon</a>
                <a>Advertise Your Products</a>
                <a>Amazon Pay on Merchants</a>
            </ul>
            <ul>
                <p>Let Us Help You</p>
                <a>COVID-19 and Amazon</a>
                <a>Your Account</a>
                <a>Returns Centre</a>
                <a>100% Purchase Protection</a>
                <a>Amazon App Download</a>
                <a>Help</a>
            </ul>
        </div>
        <div className="foot-panel2">
            <div className="logo">
                
            </div>
        </div>
        <div className="foot-panel3">
            <div className="pages">
                <a>Conditins of Use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
               @ 1996-2024, Amazon.com, Inc. or its Affiliates
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
