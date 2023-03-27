import Headersection from "../../components/homepage/header";
import Navbar from "../../components/homepage/navbar";
import Images from "../../components/homepage/section1";
import Section2 from "../../components/homepage/section2";
import Section3 from "../../components/homepage/section3";
import Section4 from "../../components/homepage/section4";
import Section5 from "../../components/homepage/section5";
import Section6 from "../../components/homepage/section6";
import Section7 from "../../components/homepage/section7";
import Section8 from "../../components/homepage/section8";
import Section9 from "../../components/homepage/section9";
import Section10 from "../../components/homepage/section10";
import Section11 from "../../components/homepage/section11";
import Section12 from "../../components/homepage/section12";
import Footer from "../../components/homepage/footer";
import Arw from "../../assets/img/p-after.svg";
import Img1 from "../../assets/img/chain.png";
import Img2 from "../../assets/img/col.png";
import Img3 from "../../assets/img/jap.png";
import Img4 from "../../assets/img/tre.png";
import Img5 from "../../assets/img/cry.png";
import Img6 from "../../assets/img/cre.png";

const Homepage = () => {
  const newdata = [
    { id: 1, title: "rings", content: "easy to mix", img: Arw, image: Img1 },
    {
      id: 2,
      title: "collectible items",
      content: "handmade and unique",
      img: Arw,
      image: Img2,
    },
    {
      id: 2,
      title: "Japanese art",
      content: "Kintsugi Jewelry",
      img: Arw,
      image: Img3,
    },
    {
      id: 2,
      title: "trendy & minimal",
      content: "Lisa Smith",
      img: Arw,
      image: Img4,
    },
    {
      id: 2,
      title: "crystals from Spain",
      content: "festive jewelry",
      img: Arw,
      image: Img5,
    },
    {
      id: 2,
      title: "creative design",
      content: "with wow-effect",
      img: Arw,
      image: Img6,
    },
  ];
  return (
    <div>
      <Headersection />
      <Navbar />
      <Images />
      <Section3 />
      <Section2 data={newdata} />
      <Section4 />
      <Section5 />
      <Section7 />
      <Section6 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Footer />
    </div>
  );
};
export default Homepage;
