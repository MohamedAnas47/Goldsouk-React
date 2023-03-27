const Section3 = ({ content }) => {
  return (
    <div>
      {content.map((newcontent) => (
        <div className="section4_container container">
          <h5>{newcontent.header}</h5>
          <p>{newcontent.section}</p>
          <button>Discover</button>
        </div>
      ))}
    </div>
  );
};
export default Section3;
