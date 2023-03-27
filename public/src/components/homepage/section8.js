import Hope from "../../assets/img/hope.png";
import Arrow from "../../assets/img/svg-2.svg";

const Section8 = () => {
  return (
    <div className="section8_container container">
      <h6>EXPLORE</h6>
      <h4>MOST SOUGHT AFTER COLLECTIONS & BRANDS</h4>
      <div className="view">
        <a href="--">View All GoldSouk Collections</a>
      </div>
      <div className="col_container">
        <div className="col_list">
          <a href="--">Key of Hope</a>
          <a href="--">Alif Unity</a>
          <a href="--">Kiku</a>
          <a href="--">Dome</a>
          <a href="--">Lace</a>
          <a href="--">Qamar</a>
        </div>
        <div className="col_list2">
          <div className="col_img">
            <img src={Hope} alt="" />
          </div>
          <div className="col_con">
            <h1>Key of Hope</h1>
            <p>
              Hope returns with its newest edition in collaboration with Nadine
              Kanso, the Arabic jewellery artisan and calligrapher reinterprets
              Hope with an innovative design that merges not only languages but
              cultures as well, as we step out from the recent challenges
              brought on by a global pandemic to revitalize Hope of a better
              tomorrow and of a better now.
            </p>
            <a href="--">
              Shop the Collection <img src={Arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section8;
