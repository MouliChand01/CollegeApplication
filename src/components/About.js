import React from "react";
import img from "../images/col1.png"
import img1 from "../images/col4.png"
import img2 from "../images/col6.jpg"
import "./About.css"


const About = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={img} alt="First slides"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img1} alt="Second slides" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img2} alt="Third slides" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-12">
              <div className="webAbout">
                <h3>ABOUT WEBSITE</h3>
              </div>
              <div>
                <p>
                  It is a great privilege and honour to be a part of the mission to make Andhra University a name to reckon within the academic fraternity by giving a strong impetus to creating an environment of knowledge, application and holistically inspiring youth to become leaders of tomorrow. I believe that the rigours of the contemporary world will require knowledgeable professionals who could withstand the dynamics of the fast-changing world.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="webAbout1">
                <h3>Highlet's WEBSITE</h3>
              </div>
              <div>
                <p>
                  It is a great privilege and honour to be a part of the mission to make Andhra University a name to reckon within the academic fraternity by giving a strong impetus to creating an environment of knowledge, application and holistically inspiring youth to become leaders of tomorrow. I believe that the rigours of the contemporary world will require knowledgeable professionals who could withstand the dynamics of the fast-changing world.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-12">
              <div className="webAbout">
                <h3>News And Events</h3>
              </div>
              <div className="scroll-body">
                <marquee direction="up" height="200px">
                  <ul>
                    <li>
                      <span>11-07-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                    <li>
                      <span>11-07-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                    <li>
                      <span>11-07-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                  </ul>
                  <hr/>
                  <ul>
                    <li>
                      <span>13-02-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                    <li>
                      <span>13-02-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                    <li>
                      <span>13-02-2022 ::</span>
                      <a href="https://services.andhrauniversity.edu.in/auts01-2021/application-form.php" target={"_blank"} style={{color:'#212529'}}>AKNU REGISTRATION </a>
                    </li>
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;