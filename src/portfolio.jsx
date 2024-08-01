function Portfolio() {
  return (
    <section className="Services_section" id="services">
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="box">
        <div className="card">
          <div>
            <img
              className="picture"
              src="./src/assets/images/survey.png"
              alt=""
            />
          </div>
          <h5 className="text">Survey Mobile App</h5>
          <div className="pra">
            <a className="button" href="#">
              Git Hub Link
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              className="picture"
              src="./src/assets/images/istockphoto.jpg"
              alt=""
            />
          </div>
          <h5 className="text">Dronoticz</h5>
          <div className="pra">
            <a className="button" href="#">
              Git Hub Link
            </a>
          </div>
    </div>
          <div className="card">
          <div>
            <img
              className="picture"
              src="./src/assets/images/personal.png"
              alt=""
            />
          </div>
          <h5 className="text">Personal Portfolio</h5>
          <div className="pra">
            <a className="button" href="#">
              Git Hub Link
            </a>
          </div>
      </div>
      </div>
    </section>
  );
}
export default Portfolio;
