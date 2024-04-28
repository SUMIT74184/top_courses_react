import React, { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
// import card from './components.

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,Subcategory]=useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data); //overhere we were making the mistake
    } catch (error) {
      toast.error("network is failed");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const [courses,setCourses]=useState(null)
  // useEffect(()=>{
  //   const fetchData =async()=>{
  //     try{
  //       const res=await fetch(apiUrl);
  //       const data=await res.json();
  //       // save the data into a variable
  //       setCourses(data.data);
  //       console.log(data);
  //     }
  //     catch(error){
  //       toast.error("something went wrong")
  //     }
  //   }
  //   fetchData();
  // },[]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-bgDark2">
        <Filter filterData={filterData}
        category={category}
        Subcategory={Subcategory} />
        {/* <Cards courses={courses}/> */}
        <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
};

export default App;
