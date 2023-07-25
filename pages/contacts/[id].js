import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Contacts = () => {
    const router = useRouter();
    const { id } = router.query
    const [contactData, setContactData] = useState([]);
    const [category, setCategory] = useState();

    const getContactData = () => {
        fetch("/api/public/get-contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((res) => {
                // Check if the response status is okay (2xx status code)
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json(); // Parse the JSON data
            })
            .then((data) => { // Data is the parsed JSON object
                setContactData(data); // Set the category state with the data
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch or JSON parsing
                console.error("Error fetching or parsing data:", error);
                // You can set the category state to a default value or handle the error in another way
            });
    };

    const getCategotyData = () => {
        fetch("/api/get-singlecategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((res) => {
                if (!res.ok) { throw new Error("Network response was not ok") }
                return res.json();
            })
            .then((data) => { setCategory(data.category) })
            .catch((error) => { console.error("Error fetching or parsing data:", error) });
    };

    useEffect(() => {
        getCategotyData()
        getContactData()
    }, [id])
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
                />
                <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <div className="">
                <div className="container">
                    <div className="bg-white">
                        {/* Order Summary  */}
                        <div>
                            <h3 className="text-xl mt-4 font-bold">Category : {category}</h3>
                            {/*     BOX     */}
                            {contactData.length == 0 ? <div className='text-center text-lg '>No Record  Found.....</div>
                                : contactData.map((data,index) => {
                                    return <>
                                        {/* <div id="controls-carousel" className="relative w-full" data-carousel="static">
                                           
                                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                                
                                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                                </div>
                                                
                                                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                                    <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                                </div>
                                               
                                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                                </div>
                                               
                                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                                </div>
                                                
                                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                                </div>
                                            </div>
                                            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                                    </svg>
                                                    <span className="sr-only">Previous</span>
                                                </span>
                                            </button>
                                            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                                    </svg>
                                                    <span className="sr-only">Next</span>
                                                </span>
                                            </button>
                                        </div> */}
                                        <div key={index+1} className="max-w-screen mx-auto">
                                            <div className="container mx-auto py-10">
                                                <div className="p-4">
                                                    <div className="rounded mb-4">
                                                        <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-1">
                                                            <div className="grid1">
                                                                <div className="relative w-full md:w-[60%] bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l  md:mx-auto border rounded-lg shadow-md">
                                                                    <div className="md:p-5 p-2"><div className="grid grid-cols-4 gap-3 md:gap-6">
                                                                        <div className="col-span-2"><a href="#">
                                                                            <h5 className="text-center text-sm md:text-2xl text-white  font-bold tracking-tight uppercase mb-2">{data.Name}</h5>
                                                                            <p className="text-center text-xs md:text-xl text-white md:text-lg font-medium tracking-tight">{data.specialization}</p></a></div>
                                                                        <div className="pt-0 md:pt-4 ml-0 md:ml-5"><div className="grid grid-cols-2 gap-4 mt-2 md:mt-0 md:gap-12">
                                                                            <a href={`tel:${data.phoneNumber}`}><img src="/Images/1.png" className="w-6 md:w-10" /></a><a href={`tel:${data.alternatePhoneNumber}`}><img src="/Images/2.png" className="w-6 md:w-10" /></a></div></div><div className="pt-0 md:pt-4">
                                                                            <a href={`mailto:${data.email}`} className="text-center text-white text-2xl md:text-xl font-medium tracking-tight">
                                                                                <i className="fa-solid fa-envelope text-sm md:text-4xl text-center" /></a></div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="absolute top-0 -m-4 right-12 block rounded-2xl bg-[red] text-[white] font-bold px-4 py-1 text-xs md:text-sm shadow-lg">Report
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;