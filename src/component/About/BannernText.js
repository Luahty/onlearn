import React from "react";
import "../../assets/css/Banner&text.css";

const BannernText = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img
                            className="img-banner"
                            src={require("../../assets/img/banner01.png")}
                            alt="banner01"
                        />
                    </div>
                    <div class="col">
                        <p className="para01">
                            Hello friends! I'm Huy from Vietnam. I am the founder of
                            dailydictation.com 🤗<br /> As a person who has used many different
                            methods to learn English, I realized that dictation is an amazing
                            way to improve my English. That's why I created this website to
                            help all English learners practice easily and effectively.<br />
                            Building and maintaining a website takes time, money and effort. I
                            need your help to keep the site running and to add more useful
                            features.<br /> If you can help me with money, awesome 🤩! You can send
                            me a donation to my PayPal / Bank accounts (see below).<br /> Another
                            great way to help me is to share this website with your friends.
                            😇<br /> I sincerely appreciate your support! Thank you!!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannernText;