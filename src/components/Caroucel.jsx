
import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./caroucel.css"
const Caroucel = ({ settings = {}, images = [], width = "100%", height = "1024px" }) =>
{

    return (
        <div className='pt-32'>

            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index}>
                        <div style={{ backgroundImage: "url('" + item + "')", width: "" + width + "", height: "" + height + "", backgroundSize: "cover" }}></div>
                    </div>

                ))}

            </Slider>
        </div>
    )
}

Caroucel.propTypes = {
    settings: PropTypes.any,
    images: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string
};
export default Caroucel