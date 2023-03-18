import React from 'react';
import PropTypes from 'prop-types';
import MenuHeader from "../components/Header"
import BarServices from '../components/BarServices';
import BarSocialNetworks from '../components/BarSocialNetworks';

const MainLayout = ({ children }) =>
{
    return (
        <>
            <MenuHeader></MenuHeader>

            {children}

            <footer className=' sm:pr-12 sm:pl-12'>
                <BarSocialNetworks />
                <BarServices />
                <div className='text-center sm:m-5 font-bold'>
                    8400 S HOOVER ST LOS ANGELES, CA 90044  / 323-789-1665
                </div>
            </footer>
        </>)
}
MainLayout.propTypes = {
    children: PropTypes.any
};
export default MainLayout