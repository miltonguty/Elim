import React, { useEffect, useState } from 'react';
import MainLayout from "../layout/MainLayout"

const RadioPage = () =>
{
    const LINK_RADIO = "https://freeuk28.listen2myradio.com/live.mp3?typeportmount=s1_14618_stream_162015420"
    const [programations, setProgramation] = useState([]);
    const getApiData = async () =>
    {
        /*let response = await fetch(
            "'http://services.ELIM.com.bo/api/radio/programacion"
        ).then((response) => response.json());*/

        // update the state
        let response = [{
            description: "Martes 7:00 PM PDT",
        }, {
            description: "Martes 8:00 PM PDT",
        }, {
            description: "Martes 9:00 PM PDT",
        }, {
            description: "Martes 10:00 PM PDT",
        }, {
            description: "Martes 11:00 PM PDT",
        }, {
            description: "Martes 12:00 PM PDT",
        }, {
            description: "Martes 1:00 PM PDT",
        },
        ]
        setProgramation(response);
    };
    useEffect(() =>
    {
        getApiData()
    }, [])

    return <MainLayout>
        <div className='pt-32  '>
            <div className='pt-15'>
                <div className='inline-block w-full  sm:flex sm:flex-row sm:justify-center'>
                    <div className=' flex  items-center text-3xl text-blue_marine font-bold'>ELIM RADIO </div>
                    <span className='text-xl m-5'>|</span>
                    <div className='flex items-center p-8 text-center uppercase p-15 bg-sky_blue text-white font-bold text-base sm:p-3'>
                        <span>Proclamando la verdad de Dios a al humanidad</span>
                    </div>
                </div>
                <div className='flex  justify-center items-center flex-row-reverse '>
                    <div className='inline-block float-left w-1/2'  >



                        <audio controls>
                            <source src={LINK_RADIO} type="audio/mpeg" />
                            <source src={LINK_RADIO} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>



                    </div>
                    <div className='inline-block float-left w-1/2'>
                        <h1 className='text-green text-center'>PROGRAMACION EN VIVO</h1>
                        <ul className=' block list-disc font-bold pl-5 m-auto w-48'>
                            {
                                programations.map((item, index) =>
                                {
                                    return (<li key={index}> {item.description} </li>)
                                })
                            }

                        </ul>
                        <ul className='block  m-auto w-44 pt-10'>
                            <li className='inline-block w-8'> <a href="/files/vlc.pls"> <img src="/images/vlc.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href="/files/winamp.pls"> <img src="/images/winamp.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href="/files/playlist.ram"> <img src="/images/itunes.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href="/files/mediaPlayer.asx"> <img src="/images/mplayer.gif" alt="" /></a></li>
                            <li className='inline-block w-8'> <a href="/files/playlist.qtl"> <img src="/images/quicktime.gif" alt="" /></a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </MainLayout >
}
export default RadioPage