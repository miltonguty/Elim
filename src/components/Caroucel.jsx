
import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./caroucel.css"
const Caroucel = ({ settings = {}, items = [], width = "100%", height = "1024px" }) =>
{

    const displayTitle = (item) =>
    {
        return (<div className='flex justify-center items-center flex-wrap h-full flex-col' >
            <div className='bg-green text-white font-bold text-6xl  rounded-bl-3xl rounded-tr-3xl pl-5 pr-5'> {item.title} </div>
            <div className='bg-sky_blue text-white text-3xl  rounded-tr-3xl rounded-bl-3xl pl-5 pr-5'> {item.subTitle} </div>
        </div>)
    }
    return (
        <div className='pt-32'>

            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        <div style={{ backgroundImage: "url('" + item.image + "')", width: "" + width + "", height: "" + height + "", backgroundSize: "cover" }}>
                            {item.title && displayTitle(item)}
                        </div>
                    </div>

                ))}

            </Slider>
        </div>
    )
}

Caroucel.propTypes = {
    settings: PropTypes.any,
    items: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,

    subTitle: PropTypes.array
};
export default Caroucel