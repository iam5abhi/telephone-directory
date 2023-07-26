import React, { useEffect, useState } from 'react';

const index = () => {
    const [contact, setContact] = useState()


    const getCategotyData = () => {
        fetch("/api/property/get-property", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => { return res.json() }
        ).then((res) => setContact(res))
    }
    useEffect(() => {
        getCategotyData()
    }, [])
    return (
        <>
            <div>
                <div className="max-w-screen mx-auto">
                    <div className="container mx-auto py-10">
                        <div className="p-4">
                            <div className="rounded mb-4">
                                <div className="grid gap-6 mb-6 grid-cols-3 md:grid-cols-3">
                                    <div className="grid1">
                                        <div className="max-w-sm rounded-full bg-[#F8AF0B] shadow-md">
                                            <div className="md:p-5 p-3">
                                                <a href="#">
                                                    <h5 className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">
                                                        Buy
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="grid2">
                                            <div className="max-w-sm rounded-full bg-[#F8AF0B] shadow-md">
                                                {/* <a href="#">
                          <img class="rounded-t-lg" src="assets/img/1942.jpg" alt="">
                      </a> */}
                                                <div className="md:p-5 p-3">
                                                    <a href="#">
                                                        <h5 className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">
                                                            Sell
                                                        </h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="grid3">
                                            <div className="max-w-sm rounded-full bg-[#4216aa] shadow-md">
                                                <div className="md:p-5 p-3">
                                                    <a href="#">
                                                        <h5 className="text-center text-white text-xl md:text-3xl font-bold tracking-tight uppercase">
                                                            Lease
                                                        </h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="rounded mb-4 ml-0 md:ml-[200px]">
                                <div className="grid gap-2 md:gap-0 mb-6 grid-cols-2 md:grid-cols-2">
                                    <div className="grid1">
                                        <div className="max-w-sm rounded-full bg-[#F8AF0B] shadow-md">
                                            <div className="md:p-5 p-3">
                                                <a href="#">
                                                    <h5 className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">
                                                        Commercial
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="grid2">
                                            <div className="max-w-sm rounded-full bg-[#F8AF0B] shadow-md">
                                                {/* <a href="#">
                            <img class="rounded-t-lg" src="assets/img/1942.jpg" alt="">
                        </a> */}
                                                <div className="md:p-5 p-3">
                                                    <a href="#">
                                                        <h5 className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">
                                                            Residential
                                                        </h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen mx-auto">
                <div className="container mx-auto py-2">
                    <div className="p-4">
                        <div className="rounded mb-4">
                            <h1 className="font-bold text-3xl mb-8 text-center">Property</h1>
                            {!contact ? "loading....." : contact.map((data) => {
                            return <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-1">
                                <div className="grid1">
                                    <div className="relative w-full md:w-[65%] bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l mx-auto border rounded-lg shadow-md">
                                        <div className="md:p-5 p-2">
                                            <div className="grid grid-cols-5 gap-2 md:gap-4">
                                                <div className="col-span-2">
                                                    <a href="#">
                                                        <h5 className="text-center py-8 text-2xl text-white md:text-3xl font-semibold tracking-tight uppercase">
                                                           {data.title}
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div className="col-span-2 ml-0 md:ml-5">
                                                    <a href="#">
                                                        <span className="bg-gray-100 text-[f8af08] text-xs font-medium mr-2 px-1 md:px-2.5 py-0.5 rounded">{data.type}</span>
                                                    </a>
                                                    <a href="#">
                                                        <p className="py-4 text-sm md:text-2xl text-white font-medium tracking-tight">
                                                            {data.ask_price}
                                                        </p>
                                                    </a>
                                                    <a href="#">
                                                        <span className="bg-gray-100 text-[f8af08] text-xs font-medium mr-2 px-1 md:px-2.5 py-0.5 rounded">{data.requirement}</span>
                                                    </a>
                                                </div>
                                                <div className="pt-12 md:pt-6 md:pl-10 pl-0 text-center">
                                                    <a href="#">
                                                        <img src="/Images/whatsapp.png" className="w-8 md:w-14" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 -m-4 right-12 block rounded-2xl bg-[red] text-[white] font-bold px-4 py-1 text-xs md:text-sm shadow-lg">
                                            Report
                                        </div>
                                    </div>
                                </div>
                                <div />
                            </div>
                             })}  
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
        </>
    )
}

export default index;