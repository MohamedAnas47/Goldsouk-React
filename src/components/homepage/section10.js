import Ring1 from "../../assets/img/14.png";
import Ring2 from "../../assets/img/15.png";
import Ring3 from "../../assets/img/16.png";
import Ring4 from "../../assets/img/17.png";
import Ring5 from "../../assets/img/18.png";
import Ring6 from "../../assets/img/19.png";
import Insta from "../../assets/img/insta.svg";
const Section10 = () => {
  return (
    <div className="section10_container container">
      <div className="main_sec10">
        <div>
          <h3>FOLLOW US ON INSTAGRAM</h3>
        </div>
        <div>
          <img src={Insta} alt="" />
          <a href="--">@goldsouk</a>
        </div>
      </div>

      <div className="main2_sec10 container">
        <div className="sec10_img">
          <img src={Ring1} alt="" />
        </div>
        <div className="sec10_img">
          <img src={Ring2} alt="" />
        </div>
        <div className="sec10_img">
          <img src={Ring3} alt="" />
        </div>
        <div className="sec10_img">
          <img src={Ring4} alt="" />
        </div>
        <div className="sec10_img">
          <img src={Ring5} alt="" />
        </div>
        <div className="sec10_img">
          <img src={Ring6} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Section10;
