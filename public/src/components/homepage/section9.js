import Meet from "../../assets/img/meet.png";
import Refund from "../../assets/img/refund.png";
import Need from "../../assets/img/need.png";
import Arrow from "../../assets/img/p-after.svg";
const Section9 = () => {
  return (
    <div className="section9_container container">
      <div className="meet">
        <img src={Meet} alt="" />
        <h3>Meet with an Expert</h3>
        <p>Book an appointment to get assistance making the right purchase.</p>
        <a href="--">
          Book Now <img src={Arrow} alt="" />
        </a>
      </div>
      <div className="meet">
        <img src={Refund} alt="" />
        <h3>Refunds & Returns policy</h3>
        <p>See our GoldSouk promise for exchange and upgrades.</p>
        <a href="--">
          Learn More <img src={Arrow} alt="" />
        </a>
      </div>
      <div className="meet">
        <img src={Need} alt="" />
        <h3>Need Assistance?</h3>
        <p>For any assistance you may contact GoldSouk Customer Service.</p>
        <div>
          <a href="--">
            {" "}
            Learn More <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Section9;
