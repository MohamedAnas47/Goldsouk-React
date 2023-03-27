import Img2 from "../../assets/img/chain.png";
import Img3 from "../../assets/img/col.png";
import Img4 from "../../assets/img/jap.png";
import Arw from "../../assets/img/p-after.svg";
import Img5 from "../../assets/img/tre.png";
import Img6 from "../../assets/img/cry.png";
import Img7 from "../../assets/img/cre.png";
const Section2 = () => {
  return (
    <div className="section2_container container">
      <div className="sec21">
        <h1>chains</h1>
        <a href="--">
          easy to mix <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img2} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>collectible items</h1>
        <a href="--">
          handmade and unique <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img3} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>Japanese art</h1>
        <a href="--">
          Kintsugi Jewellery <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img4} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>trendy & minimal</h1>
        <a href="--">
          Lisa Smith <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img5} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>crystals from spain</h1>
        <a href="--">
          festive jewellery <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img6} alt="" />
        </div>
      </div>
      <div className="sec21">
        <h1>creative design</h1>
        <a href="--">
          with wow-effect <img src={Arw} alt="" />
        </a>
        <div className="chainimg">
          <img src={Img7} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Section2;
