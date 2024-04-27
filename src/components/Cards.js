import React from 'react'
import Card from './Card';

const Cards=({courses})=> {
  let allCourses=[];

  //returns you list of all courses from the received api responses
  const getCourses=()=>{
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.for((course)=>{
        allCourses.push(course);
      })
    })
    return allCourses;
  }
  return (
    <div>
      {!courses ? (
        <div>
          <p>No data Found</p>
        </div>
      ) :( getCourses().map((course)=>{
        return <Card key={course.id} course={course}/>
       }))}

      {
      // const getCourses:()=>any[]
   
  }
  </div>
  )
}

export default Cards
