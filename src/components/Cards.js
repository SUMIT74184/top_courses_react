import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  console.log("printing data");

  const [likedCourses, setLikedCourses] = useState([]);

  //returns you list of all courses from the received api responses
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
        
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
   
    
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}

      {
        // const getCourses:()=>any[]
      }
    </div>
  );
};

export default Cards;
