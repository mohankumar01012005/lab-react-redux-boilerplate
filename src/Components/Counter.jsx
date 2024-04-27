import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  const increase = () => {
      dispatch({
      type: "INC",
      Data: 1
    });
  };

  const decrease = () => {
    if (count==0){
        alert("Your count is zero")
    }else{

        dispatch({
          type: "DEC",
          Data: 1 
        });
    }
  };

  return (
    <div>
      <h1>Likes and Unlikes</h1>
      <p>{count}</p>
      <div>
        <button className='btn' onClick={increase}>Like</button>
        <button onClick={decrease}>Unlike</button>
      </div>
    </div>
  );
};

export default Counter;
