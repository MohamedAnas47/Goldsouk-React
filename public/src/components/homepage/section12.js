import Face from "../../assets/img/face.png";
import Twit from "../../assets/img/twi.png";
import Print from "../../assets/img/print.png";
import Yout from "../../assets/img/you.png";
import Insta from "../../assets/img/insta.png";
import Tik from "../../assets/img/tiktok.png";
import Foot from "../../assets/img/footlogo.png";
const Section12 = () => {
  return (
    <div className="section12_container">
      <div className="mainsec12">
        <div className="customer padding_mobile">
          <h4>CUSTOMER SERVICES</h4>
          <ul>
            <li>Contact Us</li>
            <li>Free Expert Styling</li>
            <li>Book an Appointment</li>
            <li>Order Status</li>
            <li>Find Your GoldSouk</li>
            <li>Vault Rewards</li>
            <li>Repair Tracker</li>
            <li>Diamond Jewelry Trade-Ins</li>
            <li>Protection Plans</li>
            <li>Returns & Exchanges</li>
            <li>Safe Shipping</li>
            <li>Get It Today</li>
            <li>In-Store Events & Services</li>
            <li>Help & FAQs</li>
            <li>GoldSouk Gold Exchanges</li>
          </ul>
        </div>
        <div className="customer padding_mobile">
          <h4>PAYMENT OPTIONS</h4>
          <h6>GoldSouk Jewelers Credit Card</h6>
          <ul>
            <li>Learn More / Apply Now</li>
            <li>Pay Bill / Manage Account</li>
            <li>Register Card</li>
          </ul>
          <h6>Lease Purchase Program</h6>
          <ul>
            <li>Learn More</li>
            <li>Apply Now</li>
          </ul>
          <h6>Compare Payment Options</h6>
          <h6>Gift Cards</h6>
        </div>
        <div className="customer padding_mobile">
          <h4>PROMOTIONS</h4>
          <ul>
            <li>Coupons, Offer and Deals</li>
            <li>GoldSouk Outlet</li>
          </ul>
        </div>
        <div className="customer padding_mobile">
          <h4>ABOUT US</h4>
          <ul>
            <li>Why GoldSouk.cpm?</li>
            <li>Careers</li>
            <li>Consumer Information</li>
            <li>ADA</li>
            <li>Price Match Proposal</li>
          </ul>
        </div>
        <div className="customer padding_mobile">
          <h4>EDUCATION</h4>
          <ul>
            <li>Jewelry Library</li>
          </ul>
        </div>
      </div>
      <div className="mainsec122 padding_mobile">
        <div className="join">
          <h6>Join Our Email List and Receive a Special Offer!</h6>
          <form>
            <input
              type="text"
              id="mail"
              name="mail"
              className="email"
              placeholder="Enter your email"
            />
            <input type="signup" className="signup" value="Sign Up" />
          </form>
        </div>
        <div className="social">
          <h6>FOLLOW US</h6>
          <div className="social_links">
            <div className="links">
              <a href="--">
                <img src={Face} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="--">
                <img src={Twit} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="--">
                <img src={Print} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="--">
                <img src={Yout} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="--">
                <img src={Insta} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="--">
                <img src={Tik} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_main">
        <div className="copy">
          <a href="--">© GOLDSOUK.COM</a>
        </div>
        <div className="about">
          <img src={Foot} alt="" />
          <a href="--">Privacy Policy | </a>
          <a href="--">Do Not Sell My Information | </a>
          <a href="--">Terms of Use | </a>
          <a href="--">Site Map</a>
        </div>
      </div>
    </div>
  );
};
export default Section12;
