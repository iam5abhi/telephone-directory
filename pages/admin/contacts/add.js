/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";

const AddContact = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState([]);

  const [formData, setFormData] = useState({ specialization: '', category: "", Name: "", alternatePhoneNumber: "", phoneNumber: "", email: "" });

  const onChangeHandler = (event) => {
    setFormData((pre) => ({
      ...pre,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/add-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        specialization: formData.specialization, category: formData.category,
        Name: formData.Name, alternatePhoneNumber: formData.alternatePhoneNumber,
        phoneNumber: formData.phoneNumber, email: formData.email
      }),
    }).then(() => router.push("/admin/contacts"));
  };

  const getCategotyData = () => {
    fetch("/api/get-category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => { return res.json() }
    ).then((res) => setCategoryData(res))
  }

  useEffect(() => {
    getCategotyData()
  }, [])

  return (
    <>
      <div className="max-w-screen mx-auto">
        <div className="container mx-auto py-10">
          <div className="p-4">
            <div className="w-full mx-auto md:w-[35%]">
              <form onSubmit={(e)=>handleSubmit(e)} className="bg-white shadow-xl py-14 rounded-lg p-5">
                <h1 className=" font-bold text-3xl mb-8 text-center ">Contact Add</h1>
                <input type="hidden" name="remember" defaultvalue="true" />
                <div className="mt-8 space-y-4 ">
                  <div className="mb-4">
                    <label htmlfor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                    <select id="category" name='category' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                      <option selected>Choose</option>
                      {!categoryData ? "..." : categoryData.map(data => <option key={data.id} value={data.id}>{data.category}</option>)}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input type="text" id="name" name='Name' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                    <input type="text" id="number" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Alternate Phone</label>
                    <input type="text" id="number" name='alternatePhoneNumber' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Alternate Phone" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input type="email" id="email"  name='email' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="specialization" className="block mb-2 text-sm font-medium text-gray-900 ">Specialization</label>
                    <input type="text" id="name" name='specialization' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Specialization" required />
                  </div>
                  <div className="text-center mb-6">
                    <buttton type="submit" className="rounded-full  flex w-[30%] mx-auto justify-center 
                        rounded-full  bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l shadow-md py-2 px-4 text-lg 
                        font-medium text-white ">Submit</buttton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute(AddContact);
