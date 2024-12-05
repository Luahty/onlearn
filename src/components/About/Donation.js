import React from "react";
import "../../assets/css/Donation.css";

const Donation = () => {
    return (
        <div className="main-wrapper">
            <img
                className="img-dona"
                src={require("../../assets/img/bannerdona01.png")}
                alt="banner donation"
            />
            <h2>
                All the donations <br />I have received are listed
            </h2>
            <a href="https://docs.google.com/spreadsheets/d/1-CsKil1Wf3rvESNLtuC-zPUAe7GrL9RXATIaI6GX9dg/edit?gid=0#gid=0">
                <button className="btn btn-light text-black">Here <i class="bi bi-arrow-right"></i></button>
            </a>
        </div>
    );
};

export default Donation;