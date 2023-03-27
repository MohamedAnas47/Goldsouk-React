const Section2 = ({ data }) => {
  return (
    <div className="section2_container container">
      {data.map((updata) => (
        <div className="sec21">
          <h1>{updata.title}</h1>
          <a href="--">
            {updata.content} <img src={updata.img} alt="" />
          </a>
          <div className="chainimg">
            <img src={updata.image} alt="" />
          </div>
        </div>

        // {/* <div className="sec21">
        //   <h1>collectible items</h1>
        //   <a href="--">
        //     handmade and unique <img src={Arw} alt="" />
        //   </a>
        //   <div className="chainimg">
        //     <img src={Img3} alt="" />
        //   </div>
        // </div>
        // <div className="sec21">
        //   <h1>Japanese art</h1>
        //   <a href="--">
        //     Kintsugi Jewellery <img src={Arw} alt="" />
        //   </a>
        //   <div className="chainimg">
        //     <img src={Img4} alt="" />
        //   </div>
        // </div>
        // <div className="sec21">
        //   <h1>trendy & minimal</h1>
        //   <a href="--">
        //     Lisa Smith <img src={Arw} alt="" />
        //   </a>
        //   <div className="chainimg">
        //     <img src={Img5} alt="" />
        //   </div>
        // </div>
        // <div className="sec21">
        //   <h1>crystals from spain</h1>
        //   <a href="--">
        //     festive jewellery <img src={Arw} alt="" />
        //   </a>
        //   <div className="chainimg">
        //     <img src={Img6} alt="" />
        //   </div>
        // </div>
        // <div className="sec21">
        //   <h1>creative design</h1>
        //   <a href="--">
        //     with wow-effect <img src={Arw} alt="" />
        //   </a>
        //   <div className="chainimg">
        //     <img src={Img7} alt="" />
        //   </div>
        // </div> */}
      ))}
    </div>
  );
};
export default Section2;
