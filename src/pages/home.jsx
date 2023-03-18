
import React from 'react';
import MainLayout from "../layout/MainLayout"
import Caroucel from "../components/Caroucel"

const HomePage = () =>
{
    const items = [{
        image: "/images/img-01.jpg",
        title: "BIENVENIDO A ELIM",
        subTitle: "ELIM COCHABAMBA BOLIVIA"
    },
    {
        image: "/images/img-02.jpg",
        title: "",
        subTitle: ""
    }

    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <MainLayout >

            <Caroucel items={items} settings={settings} />

        </MainLayout>
    )
}
export default HomePage