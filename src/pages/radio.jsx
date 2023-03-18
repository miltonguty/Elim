import React from 'react';
import BarServices from '../components/BarServices';
import Caroucel from '../components/Caroucel';
import MainLayout from "../layout/MainLayout"

const RadioPage = () =>
{

    return <MainLayout>
        <div className='pt-32  '>
            <div className='pt-15'>
                <div className='inline-block w-full  sm:flex sm:flex-row sm:justify-center'>
                    <div className='text-center text-3xl text-blue_marine font-bold'>ELIM RADIO </div>
                    <span className='text-xl'>|</span>
                    <div className='p-8 text-center uppercase p-15 bg-sky_blue text-white font-bold text-base sm:p-3'>
                        <span>Proclamando la verdad de Dios a al humanidad</span>
                    </div>
                </div>
                <div className='flex  justify-center items-center flex-row-reverse '>
                    <div className='inline-block float-left w-1/2'  > multimedia</div>
                    <div className='inline-block float-left w-1/2'>
                        <h1 className='text-green text-center'>PROGRAMACION EN VIVO</h1>
                        <ul className=' block list-disc font-bold pl-5 m-auto w-44'>
                            <li>Martes 7:00 PM PDT </li>
                            <li>Martes 7:00 PM PDT </li>
                            <li>Martes 7:00 PM PDT </li>
                            <li>Martes 7:00 PM PDT </li>
                        </ul>
                        <ul className='block  m-auto w-44 pt-10'>
                            <li className='inline-block w-8'> <a href=" "> <img src="/images/vlc.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href=" "> <img src="/images/winamp.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href=" "> <img src="/images/itunes.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href=" "> <img src="/images/mplayer.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href=" "> <img src="/images/quicktime.gif" alt="" /></a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </MainLayout >
}
export default RadioPage