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
                    <img src="https://www.lifeasastrawberry.com/wp-content/uploads/2020/03/easy-crusty-french-bread.jpg" alt="" />
                    <div className="box-info">
                        <h3>Patries</h3>
                        <p>18 products</p>
                    </div>
                </div>

                <div className="product-box">
                    <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/03/croissants-on-dark-background.jpg" alt="" />
                    <div className="box-info">
                        <h3>Sandwiches</h3>
                        <p>8 products</p>
                    </div>
                </div>

                <div className="product-box">
                    <img src="https://png.pngtree.com/background/20230422/original/pngtree-french-bread-on-dark-background-picture-image_2453069.jpg" alt="" />
                    <div className="box-info">
                        <h3>Croissant</h3>
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
                        <img src="https://cdn.shopify.com/s/files/1/0071/3552/files/chocolate-croissants-4_9bfb9278-d304-489c-a804-f309650d8e51.jpg?v=1592364820" alt="" />
                    </div>
                    <div className="image-item">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Fpain-au-chocolat-hero-2000.jpg&q=60" alt="" />
                    </div>
                    <div className="image-item">
                        <img src="https://png.pngtree.com/background/20230427/original/pngtree-two-croissants-on-a-plate-on-a-dark-countertop-picture-image_2496236.jpg" alt="" />
                    </div>
                </div>
                    
                
            </div>
            </div>
            <Footer/>

            
            

        </div>
    )
}

export default Home;