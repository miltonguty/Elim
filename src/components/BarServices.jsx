import React from "react"
const BarServices = () =>
{
    return (
        <div className=" w-auto h-28 bg-green uppercase text-black_custom p-2 sm:ml-auto sm:mr-auto sm:flex sm:justify-center sm:items-center">
            <div className="w-full font-bold inline-block text-center sm:w-auto sm:top-3 float-left sm:t-2 sm:flex sm:justify-center sm:items-center sm:flex-col sm:h-full"> <p>Proximos servicios</p></div>
            <div className="w-full inline-block sm:float-left sm:w-auto">
                <div className="flex justify-center sm:justify-end">
                    <span className="hidden  relative border-2 border-solid h-14 m-2 color rounded-3xl ml-2 mr-2 sm:inline-block"></span>
                    <div className="text-sm ml-1 mr-1 sm:ml-2 sm:mr-2 inline-block sm:text-1xl "> <p className=" m-auto text-center">7:00 PM </p><p className="font-semibold text-center">Martes</p></div>
                    <span className="hidden  relative border-2 border-solid h-14 m-2 color rounded-3xl ml-2 mr-2 sm:inline-block"></span>
                    <div className="text-sm ml-1 mr-1 sm:ml-2 sm:mr-2 inline-block sm:text-1xl "> <p className=" m-auto text-center">7:00 PM </p><p className="font-semibold text-center">Viernes</p></div>
                    <span className="hidden relative border-2 border-solid h-14 m-2 color rounded-3xl ml-2 mr-2  sm:inline-block"></span>
                    <div className="text-sm ml-1 mr-1 sm:ml-2 sm:mr-2 inline-block sm:text-1xl"> <p className=" m-auto text-center">6:30 PM </p><p className="font-semibold text-center">Sabados</p><p className="font-semibold text-center">Jovenes</p></div>
                    <span className="hidden relative border-2 border-solid h-14 m-2 color rounded-3xl ml-2 mr-2  sm:inline-block"></span>
                    <div className="text-sm ml-1 mr-1 sm:ml-2 sm:mr-2 inline-block sm:text-1xl"> <p className=" m-auto text-center">8:30 AM </p><p className="font-semibold text-center">Domingos</p><p className="font-semibold text-center">Quechua</p></div>
                    <span className="hidden relative border-2 border-solid h-14 m-2 color rounded-3xl ml-2 mr-2  sm:inline-block"></span>
                    <div className="text-sm ml-1 mr-1 sm:ml-2 sm:mr-2 inline-block sm:text-1xl"> <p className=" m-auto text-center">11:00 AM </p><p className="font-semibold text-center">Domingos</p><p className="font-semibold text-center">Castellano</p></div>
                </div>
            </div>
        </div >
    )
}
export default BarServices