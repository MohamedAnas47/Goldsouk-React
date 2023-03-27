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

const Homepage = () => {
  const newline = "ARABIC JEWELLERY ARTISAN AND CALLIGRAPHY";
  const newContent = [
    {
      header: "OUR MODEL AND COLLECTIONS",
      section: "The Gold Souk watch is steel and gold",
    },
  ];
  return (
    <div>
      <Headersection />
      <Navbar />
      <Images />
      <Section3 content={newContent} />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section7 newName={newline} />
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
