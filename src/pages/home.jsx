
import React from 'react';
import MainLayout from "../layout/MainLayout"
import Caroucel from "../components/Caroucel"

const HomePage = () =>
{
    const images = ["/images/img-01.jpg", "/images/img-02.jpg"]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <MainLayout >

            <Caroucel images={images} settings={settings} />
        </MainLayout>
    )
}
export default HomePage