import React from 'react';
import MainLayout from "../layout/MainLayout"

const Connect_1Page = () =>
{
    return <MainLayout>
        <div className='inline-block'>
            <div className='block pl-10 pr-10 pt-36  m-auto'>
                <div className='inline-block float-left sm:w-1/2 '>
                    <div className='inline-block float-right p-2'>
                        <h1 className='right-2  font-bold text-2xl '>  NUESTROS LIDERES</h1>
                        <img src='/images/pastor_fuentes2.png' className=" float-right sm:h-456px sm:w-330px" />
                    </div>
                </div>
                <div className='inline-block sm:w-1/2 sm:pb-16 float-left'>
                    <div className='p-5 w-full sm:w-70% mt-5 '>
                        <h2 className='font-bold mb-5'>APOSTOL JORGE FUENTES Y MARLENI FUENTES</h2>
                        <p>Nuestro Pastor Jorge Fuentes nacio en la ciudad de san marcos, Guatemala.
                            Esta casado con Marlenie Fuentes y son padres de Leonardo, Jorge Ernesto, Maria Jose y Pablo Fuentes. El Es ingeniero de profesion y en el año 1986 reconocio a Cristo como su salvador en Elim Central Guatemala.  </p>
                        <p>En el año 1996 fue delegado y guiado para impartir la sana dotrina y preparar a la iglesia en Los Angeles, CA (USA) para el encuentro con nuestro amado. </p>
                        <p> Hace años llegue a este pais donde todos decian era la perdicion de los Pastores, Pero Papa es Fiel y el es quien me ha sostenido y me ha plantado en este lugar. Mi Familia y yo hemos conquistado esta tierra lejana la gloria sea para mi Cristo que nos ha permitido ser luz en este Pais - Pastor Jorge Fuentes</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout >
}
export default Connect_1Page