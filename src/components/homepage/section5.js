import Watch1 from "../../assets/img/watch1.png";
import Watch2 from "../../assets/img/watch2.png";
import Watch3 from "../../assets/img/watch3.png";
import Watch4 from "../../assets/img/watch4.png";
const Section5 = () => {
  return (
    <div className="section5_container container">
      <h5>WATCHES</h5>
      <div className="main_container">
        <div className="main1">
          <a href="--">NEW</a>
          <img src={Watch1} alt="" />
          <h4>TANK FRANCAISE WATCH</h4>
          <p>Small model, quartz movement, yellow gold, diamonds</p>
          <h5>AED 106,000</h5>
        </div>
        <div className="main1">
          <a href="--">NEW</a>
          <img src={Watch2} alt="" />
          <h4>TANK FRANCAISE WATCH</h4>
          <p>Medium model, quartz movement, yellow gold</p>
          <h5>AED 93,000</h5>
        </div>
        <div className="main1">
          <a href="--">NEW</a>
          <img src={Watch3} alt="" />
          <h4>TANK FRANCAISE WATCH</h4>
          <p>Medium model, quartz movement, steel</p>
          <h5>AED 16,800</h5>
        </div>
        <div className="main1">
          <a href="--">NEW</a>
          <img src={Watch4} alt="" />
          <h4>TANK FRANCAISE WATCH</h4>
          <p>Small model, quartz movement, steel</p>
          <h5>AED 13,200</h5>
        </div>
      </div>
    </div>
  );
};
export default Section5;
