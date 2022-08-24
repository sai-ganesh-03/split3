import React from "react";
import { Container, Row, Col } from "reactstrap"; 
// import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import "./hero-section.css";
import heroImg from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
    
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h3>All You Need Is One </h3>
              <h1>Marketplace</h1>
              {/* <h2>
                A New Place To Discover, Collect & Sell 
                <span>Digital Assets</span> With Us
              </h2> */}
              <p>
                #Now Price Is Not A Barrier
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="6" md="6">
              <div className="hero__btns flex align-items-center justify-content-center gap-4" >
                <h2>Own Anything </h2>
                <p>We offer everyone opportunity to co-own exclusive collections at as low as Rs.100</p>
                <button className=" create__btn flex justify-content-center align-items-center gap-2">
                  <Link to="/create">Start Today</Link>
                </button>
              </div>
          </Col>    
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
