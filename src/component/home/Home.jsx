import React from "react";
import Slider from "./slider/Slider";
import "./Home.scss";
import qr_scann from "./hung_nguyen281_qr.png";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div className="home-container">
            <Slider/>
            <div className="home-content">
            <div className="info-shop">
                <p>Since 2002 we've been serving our customers the best quality freshly baked French food, traditionally made and presented with care.</p>
            </div>

            <h2 className="title">Products</h2>
            <div className="product-container">
                
                <div className="product-box">
                    <img src="https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/5/6/5/306565_bertinetbakeryseededsourdoughloaf_753575.png" alt="" />
                    <div className="box-info">
                        <h3>Breads</h3>
                        <p>15 products</p>
                    </div>
                </div>

                <div className="product-box">
                    <img src="https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/5/6/5/306565_bertinetbakeryseededsourdoughloaf_753575.png" alt="" />
                    <div className="box-info">
                        <h3>Breads</h3>
                        <p>15 products</p>
                    </div>
                </div>

                <div className="product-box">
                    <img src="https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/5/6/5/306565_bertinetbakeryseededsourdoughloaf_753575.png" alt="" />
                    <div className="box-info">
                        <h3>Breads</h3>
                        <p>15 products</p>
                    </div>
                </div>

                <div className="product-box">
                    <img src="https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/5/6/5/306565_bertinetbakeryseededsourdoughloaf_753575.png" alt="" />
                    <div className="box-info">
                        <h3>Breads</h3>
                        <p>15 products</p>
                    </div>
                </div>
            </div>

            <div className="showcase-container">
                <div className="profile-scanner">
                    <h2 className="title">Instagram</h2>
                    <p>Connect with me</p>
                    <img src={qr_scann} alt="" />
                </div>

                <div className="image-group">
                    <div className="image-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDYujXs_QYohvdsyu6J5xpDKO2_qTBDb8m1Fvwg4u2NEIDqEVpAKuldQMlRvfrKWLTkc&usqp=CAU" alt="" />
                    </div>
                    <div className="image-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDYujXs_QYohvdsyu6J5xpDKO2_qTBDb8m1Fvwg4u2NEIDqEVpAKuldQMlRvfrKWLTkc&usqp=CAU" alt="" />
                    </div>
                    <div className="image-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDYujXs_QYohvdsyu6J5xpDKO2_qTBDb8m1Fvwg4u2NEIDqEVpAKuldQMlRvfrKWLTkc&usqp=CAU" alt="" />
                    </div>
                </div>
                    
                
            </div>
            </div>
            <Footer/>

            
            

        </div>
    )
}

export default Home;