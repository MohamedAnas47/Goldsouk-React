import Ring from "../../assets/img/ring.png";
import Love from "../../assets/img/love.png";
import Mix from "../../assets/img/mix.png";
import Arw from "../../assets/img/p-after.svg";
import Person from "../../assets/img/person.png";
import India from "../../assets/img/indian.png";
import Basic from "../../assets/img/basic.png";
const Section6 = () => {
  return (
    <div className="section2_container container">
      <div className="sec21">
        <h1>rings</h1>
        <a href="--">
          never too much <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Ring} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>In love?</h1>
        <a href="--">
          matching rings <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Love} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>mix the colors</h1>
        <a href="--">
          don't forget your palette <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Mix} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>Personalized jewelry</h1>
        <a href="--">
          with hidden messages <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Person} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>Indian designer</h1>
        <a href="--">
          worldwide recognition <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={India} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>basic pieces</h1>
        <a href="--">
          to wear non stop <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Basic} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Section6;
