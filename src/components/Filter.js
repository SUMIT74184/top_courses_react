import React from 'react';
// import Cards from './Cards.js';

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let Subcategory = props.Subcategory;

  // Function to handle filtering
  function filterHandler(title) {
    Subcategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium transition-all duration-300 ${
              category === data.title ? 'text-black bg-white' : 'text-white bg-black  hover:bg-opacity-50'
            }`}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
