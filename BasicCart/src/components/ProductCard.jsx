import React from 'react'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
function ProductCard({title,image,description,cat,price})
 {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
     <div className='flex flex-col p-5 rounded-2xl shadow transition-all hover:shadow-blue-400 hover:transition-colors'>
      <img src={image} alt={title} className='h-70 object-fit' />
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p>{cat}</p>
      <p>${price}</p>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='absolute top-52 left-52 bg-white py-5 w-8/12 h-4/12 rounded-2xl transition-all'>
        <button onClick={handleClose} className='text-2xl text-red-700'>X</button>
         <p> {description} </p> 
        </div>
      </Modal>
      
        <button onClick={handleOpen} className='bg-green-500 py-4 rounded-2xl'>See More</button>
     </div>
    </>
  )
}

export default ProductCard