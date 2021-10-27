import React from "react";

function form() {
 return (
  <div className='h-screen bg-dark'>
   <div className='flex items-center justify-center h-full'>
    <div className='flex items-start justify-center bg-white rounded-md w-full'>
     <input
      type='text'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='rounded-l-md px-4 text-xl text-dark poppins h-12 flex-1'
      placeholder='ex: elonmusk@spacex.com'
     />
     <button
      type='submit'
      onSubmit={() => {
       addToWaitlist(email);
      }}
      className='rounded-md px-4 text-xl  bg-primary text-white h-12 transition-colors duration-100 hover:bg-primaryTransition'
     >
      Get Early Access
     </button>
    </div>
   </div>
  </div>
 );
}

export default form;
