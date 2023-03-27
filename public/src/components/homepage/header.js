import Location from "../../assets/img/loc.svg";
import Phone from "../../assets/img/phon.svg";
import Uae from "../../assets/img/uae.png";
import Login from "../../assets/img/profile.svg";
const Headersection = () => {
  return (
    <div className="header_container">
      <div className="head_nav">
        <ul>
          <li>
            <img src={Location} alt="" />
            <a href="-"> Find a Store</a>
          </li>
          <li>
            <a href="-">Our Promise</a>
          </li>
          <li>
            <img src={Phone} alt="" />
            <a href="--"> Contact</a>
          </li>
          <li>
            <a href="--">Careers</a>
          </li>
          <li>
            <a href="--">Book an Appointment</a>
          </li>
        </ul>
      </div>
      <div className="head_nav2">
        <ul>
          <li>
            <img src={Uae} alt="" />
          </li>
          <li>
            <select name="cars" id="cars">
              <option value="uae">UAE</option>
              <option value="dubai">Dubai</option>
              <option value="oman">Oman</option>
              <option value="sharjah">Sharjah</option>
            </select>
          </li>
          <li>
            <a href="-">العربية</a>
          </li>
          <li>
            <span>
              <img src={Login} alt="" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Headersection;
