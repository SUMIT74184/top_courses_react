import React, { useState } from "react";
import Cards from './components/Cards'
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import {apiUrl,filterData} from './data';
import { useEffect } from "react";
import { toast } from "react-toastify";
// import card from './components.......................'

const App = () => {
  // const[]

  const [courses,setCourses]=useState(null)
  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        // save the data into a variable
        setCourses(data.data);
        console.log(data);
      }
      catch(error){
        toast.error("something went wrong")
      }
    }
    fetchData();
  },[]);
  return (
<div>
  <Navbar/>
  <Filter filterData={filterData}/>
  <Cards courses={courses}/>
</div>
  )
};

export default App;
