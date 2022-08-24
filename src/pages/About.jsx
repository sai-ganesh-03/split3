import React from "react";
import v1 from "../assets/videos/aboutv1.mp4"
import v2 from "../assets/videos/aboutv2.mp4"
import v3 from "../assets/videos/aboutv3.mp4"
import v4 from "../assets/videos/aboutv4.mp4"
import slider1 from "../assets/images/slider1.png"
import slider2 from "../assets/images/slider2.png"
import slider3 from "../assets/images/slider3.png"
import "./about.css"
// import './about.scss'
import { Container, Row, Col } from "reactstrap";



const About = () => {
    return ( 
        <Container>
            <div id="one">
                <div id="content">
                    <h1>Split3.tech</h1>
                    <p>We offer collectors the opportunity to co-own physical and digital assets <br/>through the power of tokenization at as low as Rs.100.</p>
                </div>
            </div>

            <div id="boxes">
                <Row>
                    <Col>
                        <div className="box">
                            <video src={v1} autoPlay loop muted></video>
                            <h1>Asset Acquisition Securing It</h1>
                            <p>Collectors give the nft or asset for verification and appraisal. We store it on a secure site inside a physical vault.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box">
                            <video src={v2} autoPlay loop muted></video>
                            <h1>Tokenization</h1>
                            <p>Ownership of the asset is tokenized. By creating digitized tokens, each is initially priced at Rs.100. All the tokens of an asset are equal to the asset’s total value. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box">
                            <video src={v3} autoPlay loop muted></video>
                            <h1>Ownership and offering</h1>
                            <p>the owner can sell 100 %of the stake but if he wants he can keep 0%-25% of the asset.The tokenized asset put on the marketplace receives an offering.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box">
                            <video src={v4} autoPlay loop muted></video>
                            <h1>Secondary Market</h1>
                            <p> 75%-100% of the asset is traded on a fully collateralize real-time exchange</p>
                        </div>
                    </Col>
                </Row>
            </div>
            
            {/* <section id="slider">
                <div class="wra">
                    <img src={slider1} alt="" className="simg" />
                    <img src={slider2} alt="" className="simg"/>
                    <img src={slider3} alt="" className="simg"/>
                </div>
            </section> */}
                    

        </Container>
     );
}
 
export default About;