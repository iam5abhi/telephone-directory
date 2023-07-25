import React,{ useState, useEffect } from 'react'
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter(); 
    const [topBanner,setTopBanner]=useState()
    const [buttomBanner,setButtomBanner]=useState()

    const deleteCategory = (id) => {
        fetch("/api/delete-category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }).then(() => {
            getCategotyData()
            alert("delete Succfully")
        });
    };

    const getButtomBannerData = ()=>{
        fetch("/api/banner/get-buttomBanner", { 
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {return res.json()}
          ).then((res) => setButtomBanner(res))
    }

    const getTopBannerData = ()=>{
        fetch("/api/banner/get-topBanner", { 
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {return res.json()}
          ).then((res) => setTopBanner(res))
    }

    useEffect(() => {
        getTopBannerData()
        getButtomBannerData()
    }, [])
  return (
    <>
    <div className="p-20">
        <div className='mb-5 flex justify-between'>
          <h2 className='font-semibold text-xl'>Top Banner</h2>
          <Link href="/admin/banner/top-add"><h2 className='text-lg'>Add Banner</h2></Link>
        </div>
        <div className=" grid grid-cols-3 gap-2">
        {!topBanner?null:topBanner.map((data,index)=>{
            return <Link key={index+1} href={data.Link} ><img src={data.image} /> </Link>
          })}
        </div>
    </div>
    <br/>
    <br/>
    <div className="p-20">
        <div className='mb-5 flex justify-between'>
          <h2 className='font-semibold text-xl'>Buttom  Banner</h2>
          <Link href="/admin/banner/top-add"><h2 className='text-lg'>Add Banner</h2></Link>
        </div>
        <div className=" grid grid-cols-3 gap-2">
          {!buttomBanner?null:buttomBanner.map((data,index)=>{
            return <Link key={index+1} href={data.Link} ><img src={data.image} /> </Link>
          })}
        </div>
    </div>
    </>
  )
}

export default PrivateRoute(Index);