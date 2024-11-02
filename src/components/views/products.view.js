import React from "react";

import IndexNavbar from "../navbar/navbar.component";
import MenuIndex from "../contents/products.component";
//import Footer from "../Footers/footer.component";
// import ProductPage from "../Content/shop.component";

function ProductIndex() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main">
                    <MenuIndex/>
                    {/* <ProductPage /> */}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default ProductIndex;