import Logo from "../../assets/img/gold-souk-01-2.png";
import Name from "../../assets/img/logogold.png";
import Love from "../../assets/img/div.svg";
import Ham from "../../assets/img/hamburger.png";

const Navbar = () => {
  //
  return (
    <div className="nav_container">
      <div className="navlogo">
        <img src={Logo} alt="" />
        <span>
          <img src={Name} alt="" />
        </span>
      </div>
      <div className="navlist">
        <ul>
          <li>
            <a href="-">Jewellery</a>
          </li>
          <li>
            <a href="-">
              Our
              <br /> Collection
            </a>
          </li>
          <li>
            <a href="-"> International Brands</a>
          </li>
          <li>
            <a href="-"> Gifts & Occasions</a>
          </li>
          <li>
            <a href="-">
              Inspire <br /> Me
            </a>
          </li>
        </ul>
      </div>
      <div className="hamber">
        <img src={Ham} alt="" />
      </div>
      <div className="navlove">
        <img src={Love} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
