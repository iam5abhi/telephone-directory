import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const index = () => {
    const router = useRouter()
    const [contact, setContact] = useState()
    const [data, setData] = useState({})

    console.log(data,"{...data,[collmnName]: filter }")
    const getCategotyData = () => {
        fetch("/api/property/get-property", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => { return res.json() }
        ).then((res) => setContact(res))
    }

    const getFilterData = (filter, collmnName) => {
        setData({...data,[collmnName]: filter })
        FilterData()
    };

    const FilterData =()=>{
        fetch("/api/filter/filter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) { throw new Error("Network response was not ok") }
                return res.json();
            })
            .then((data) => { setContact(data) })
            .catch((error) => { console.error("Error fetching or parsing data:", error) });
    }

    useEffect(() => {
        getCategotyData()
    }, [])
    return (
        <>

            <div>
                <div className="max-w-screen mx-auto bg-[#4216aa]">
                    <div className="container mx-auto py-4">
                        <div className="px-4">
                            <div className="cursor-pointer">
                                <img onClick={()=>router.push('/')} src="/Images/back.png" className="w-6" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen mx-auto">
                    <div className="container mx-auto py-6">
                        <div className="px-4">
                            <div className="rounded mb-4 ml-0 md:ml-[200px]">
                                <div className="grid gap-2 md:gap-0  grid-cols-2 md:grid-cols-2">
                                    <div className="grid1">
                                        <div className="max-w-sm rounded-full bg-[#F8AF0B] shadow-md">
                                            <div className="md:p-5 p-3">
                                                <a href="#">
                                                    <h5 onClick={() => router.push('/properties/buy')} className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">Buy</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="grid2">
                                            <div className="max-w-sm rounded-full bg-[#4216aa] shadow-md">
                                                {/* <a href="#">
                            <img class="rounded-t-lg" src="assets/img/1942.jpg" alt="">
                        </a> */}
                                                <div className="md:p-5 p-3">
                                                    <a href="#">
                                                        <h5 onClick={() => router.push('/properties/lease')} className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">Lease</h5>
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
            </div>
        </>
    )
}

export default index;
