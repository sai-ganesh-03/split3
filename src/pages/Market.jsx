import React, { useState } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/Nft-card/NftCard";

import { NFT__DATA } from "../assets/data/data";

import { Container, Row, Col } from "reactstrap";

import dbicon from "../assets/images/dashboard.png"
import acicon from '../assets/images/auction.png'
import mkicon from '../assets/images/market.png'
import cmicon from '../assets/images/community.png'
import wlicon from '../assets/images/wallet.png'
import sticon from '../assets/images/settings.png'
import notiicon from '../assets/images/notification.png'
import sricon from '../assets/images/search.png'


import "../styles/market.css";




const Market = () => {
  
  const handleNotificationClick=()=>{
    const ul=document.querySelector('.notification-drop .item ul');
    if (ul.style.display === "none") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  }

  const [data, setData] = useState(NFT__DATA);

  
  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );

      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"MarketPlace"} />
      <div className="wrapper">
        <section id="left">
            <ul>
              <li><button className="button-85" >Guest!</button></li>
              <li>
              <span><button className="button-86" ><img src={dbicon} alt="db"/> Dashboard</button></span>
              </li>
              <li><button className="button-86" ><img src={acicon} alt="db"/> Auctions</button></li>
              <li><button className="button-86" ><img src={mkicon} alt="db"/> MarketPlace</button></li>
              <li><button className="button-86" ><img src={cmicon} alt="db"/> Community</button></li>
              <li><button className="button-86" ><img src={wlicon} alt="db"/> Wallets</button></li>
              <li><button className="button-86" ><img src={sticon} alt="db"/> Settings</button></li>
            </ul>
        </section>
        <section id="middle">
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <div className="market__product__filter d-flex align-items-center justify-content-between">
                  <div className="filter__left d-flex align-items-center gap-5" style={{'width':'60%'}}>
                  <div className="wrap" style={{'width':'100%'}}>
                      <div className="search">
                          <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                          <button type="submit" className="searchButton">
                          <img src={sricon} alt="db"/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="filter__right">
                    <select onChange={handleSort}>
                      <option>Sort By</option>
                      <option value="high">High Rate</option>
                      <option value="mid">Mid Rate</option>
                      <option value="low">Low Rate</option>
                    </select>
                  </div>
                </div>
              </Col>

              {data?.map((item) => (
                <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                  <NftCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section id="right">
        <ul class="notification-drop">
          <li class="item" onClick={()=>{handleNotificationClick()}}>
          <img src={notiicon} alt="db"/> <span class="btn__badge pulse-button ">3</span>     
              <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
              </ul>
          </li>
        </ul>

        <div id="wallet-info">
          <h3>Wallet Info</h3>
          <p>100Eth</p>
          <p>Your Assets</p>
        </div>
        </section>
      </div>
    </>
  );
};

export default Market;
