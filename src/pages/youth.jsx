import React from 'react';
import BarServices from '../components/BarServices';
import Caroucel from '../components/Caroucel';
import MainLayout from "../layout/MainLayout"

const YouthPage = () =>
{
    const items = [
        {
            image: "/images/youth-img-01.jpg",
            title: "",
            subTitle: ""
        },
        {
            image: "/images/youth-img-02.jpg",
            title: "",
            subTitle: ""
        }]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return <MainLayout>
        <Caroucel items={items} settings={settings} height="397px" />
        <div>
            <div className='w-1/2 m-auto'>
                <div className='font-Montserrat m-auto'>
                    <div className='w-full'><h2 className=' text-blue_marine text-4xl text-center font-bold'>V  I  S  I  O  N</h2></div>
                    <div className='text-sm' > PVC es la Vision que Dios nos ha dado. Trabajar y vivir bajo esta vision es lo que ahnelamos y lo que sabemos que nos acercara cada dia al corazon de Dios. Te invitamos a que tu tambien seas parte para que juntos podamos descubir y disfrutar de una vida plena en Cristojesus. </div>

                </div>
            </div>
            <div className='p-10'>
                <div>
                    <div className=' flex justify-center items-center'>
                        <img src="/images/p.png" alt="" />
                        <img src="/images/v.png" alt="" className='-ml-8' />
                        <img src="/images/c.png" alt="" className='-ml-8' />
                    </div>
                    <div className='w-full m-auto  sm:w-90% lg:w-70% font-bold' >
                        <p className='w-full sm:w-1/3 inline-block float-left mb-5 sm:pl-5'> <span className='text-sky_blue uppercase'>P</span> Dios ha despertado los corazones de nuestra juventud con <span className='text-sky_blue uppercase'>PASION</span> Y <span className='text-sky_blue uppercase'>PALABRA</span> por su <span className='text-sky_blue uppercase'>PRESENCIA</span>. Nuestra vision esque la <span className='text-sky_blue uppercase'>PRESENCIA</span> de Dios sea siempre nuestro nucleo y su <span className='text-sky_blue uppercase'>PALABRA</span> sea nuestro manual de vida. Ahnelamos que en nuestro ADN este impregnado el ADN divino de Dios. </p>
                        <p className='w-full sm:w-1/3 inline-block float-left mb-5 sm:pl-5'><span className='text-orange-400 uppercase'>V</span>  <span className='text-orange-400 uppercase'>VALORAR</span> la presencia de Dios es primordial en Elim Youth. Creemos firmemente que Dios ahnela jovenes que vivan en intimidad con El y que aprecien cada momento en su presencia y cada regalo que Dios nos de ha desarrollar . <span className='text-orange-400 uppercase'>VALORAR</span> es aprender a vivir en santidad dia tras dia y defender lo que Dios nos ha dado. </p>
                        <p className='w-full sm:w-1/3 inline-block float-left mb-5 sm:pl-5'><span className='text-green uppercase'>C</span> <span className='text-green uppercase'>El CRECER</span> espiritualmente y terrenalmente es necesario para nuestros jovenes. Nos rehusamos a ser una juventud mediocre sin el ahnelo de <span className='text-green uppercase'>CRECER.</span>  Es muy importante para nosotros el alcanzar nuevas dimensiones y  subir de nivel en cada Servico, cada evento y en cada dia porque en ello hay una oportunidad de Dios a nuestras vidas. </p>
                    </div>
                </div>
            </div>
            <div className='w-full inline-block bg-custom-black max-h-full'>
                <div className='w-full sm:w-2/3 inline-block text-white h-full float-left'>
                    <img className='float-right' src="/images/youth-img-3.jpg" alt="" />
                </div>
                <div className='w-full sm:w-1/3 inline-block text-white  float-left h-80 sm:h-72  font-bold'>
                    <div className=' w-full block text-center ml-auto mr-auto mt-8 float-left sm:mt-2 sm:ml-5 md:w-80%'>
                        <h2 className='w-full text-center  md:mt-6 lg:text-sm xl:text-2xl'>ENCOUNTER - TIEMPOS DE ENTREGA</h2>
                        <h2 className=' text-green font-bold text-xs00 lg:mt-5 xl:text-3xl'>PROXIMOS SERVICIOS</h2>
                        <ul className='list-disc w-32 text-left ml-auto mr-auto xl:text-2xl md:w-56 xl:mt-5 sm:ml-10 '>
                            <li>Septiembre 16</li>
                            <li>Septiembre 30</li>
                            <li>Octubre 14</li>
                            <li>Octubre 28</li>
                            <li>Noviembre 11</li>
                        </ul>
                        <button className='bg-sky_blue mt-5 pl-10 pr-10 pt-2 pb-2 sm:mt-1 sm:p-1 md:pl-12 md:pr-12 lg:mt-8  '>VER LOS SERVICIOS</button>
                    </div>
                </div>
            </div>
            <div className='bg-green-custom text-white'>
                <h2 className='text-center font-Montserrat text-5xl p-5'>QUIENES SOMOS</h2>
                <div className='inline-block p-10'>
                    <div className='w-full sm:w-1/2 inline-block float-left'>
                        <div className='w-full sm:w-1/2 float-right'>
                            <div className='p-5'>
                                <img className=' m-auto rounded-full' src="/images/image-jorge_ernesto.png" alt="" />
                                <p>PASTOR </p>
                                <p>JORGE ERNESTO NETO FUENTES Y MIRIAM FUENTES</p>
                            </div>
                            <p>Follow our youth pastor Neto on social media</p>
                            <div className='flex flex-row justify-end pr-5  pt-5 '>
                                <img className='pr-5' src="/images/youtube2.png" alt="" />
                                <img className='pr-5' src="/images/face2.png" alt="" />
                                <img className='pr-5' src="/images/instagram2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 inline-block  float-left'>
                        <div className=' w-full sm:w-1/2 mt-10'>
                            <div className=' text-justify sm:text-left w-full m-auto'>Elim Youth son los jovenes de nuestra congregacion. Los cuales estan siendo guiados por nuestro pastor de jovenes Ernesto (Neto) Fuentes y su esposa Miriam (Tiky) Fuentes.  Desde el 2008 son quienes han estado al frente de esta Generacion que se esta levantando para dar a conocer el nombre de Cristo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </MainLayout >
}
export default YouthPage