import React from "react";
import "../../assets/css/Carousel.css";

const Carousel = () => {
    return (
        <div className="container-card ">
            <div className="row">
                <div className="col-md-3">
                    <div class="card shadow">
                        <img
                            src={require("../../assets/img/paypal.png")}
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <p class="card-text">
                                PayPal or Credit/Debit card:<br />
                                <a href=" https://ko-fi.com/khnguyen">khnguyen</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card shadow">
                        <img
                            src={require("../../assets/img/vietcombank.png")}
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Vietcombank:<br />0051000503985 (Nguyen Khoa Huy)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card shadow">
                        <img
                            src={require("../../assets/img/momo.jpg")}
                            class="card-img-top momo"
                            alt="..."
                        />
                        <div class="card-body">
                            <p class="card-text">
                                MoMo: <br /> 0379900070 (Nguyen Khoa Huy)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;