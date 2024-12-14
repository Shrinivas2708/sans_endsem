import React, { useState } from "react";
import "../App.css";
import { MdClose } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = () => {
  toast.success("Data saved successfully", {
    position: toast.POSITION.TOP_CENTER, // You can customize the position
    autoClose: 3000, // Time in milliseconds to auto-close the toast
    hideProgressBar: true, // Hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    draggable: true, // Make the toast draggable
  });
};

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  

  const [image, setImage] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = () => {
      console.log(render.result);
      setImage(render.result);
    };
    render.onerror = (error) => console.log("Error :", error);
  }

 
  return (
    <div className='addContainer'>
      <form onSubmit={handleSubmit}>
        <div className='close-btn' onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor='image'>Select an Image:</label>
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          onChange={convertToBase64}
          value={rest.i}
        />
        {image === "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} />
        )}

        <label htmlFor='name'>Full Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleOnChange}
          value={rest.name}
        />
       
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleOnChange}
          value={rest.email}
        />
          
        <label htmlFor='homeMobile'>Mobile:</label>
        <input
          type='text'
          id='homeMobile'
          name='homeMobile'
          onChange={handleOnChange}
          value={rest.homeMobile}
        />
        <label htmlFor='grade'>Grade:</label>
        <input
          type='number'
          id='grade'
          name='grade'
          onChange={handleOnChange}
          value={rest.grade}
        />
        <label htmlFor='class'>Class:</label>
        <input type="text"
         id='class'
         name='class'
         placeholder="eg: IT SMAD"
         onChange={handleOnChange}
         value={rest.class}
        />
        <label htmlFor='passyr'>Passout Year:</label>
        <input type="text"
         id='passyr'
         name='passyr'
         placeholder="2027"
         onChange={handleOnChange}
         value={rest.passyr}
        />

        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          id='address'
          name='address'
          onChange={handleOnChange}
          value={rest.address}
        />

        <label htmlFor='motherName'>Mother's Name:</label>
        <input
          type='text'
          id='motherName'
          name='motherName'
          onChange={handleOnChange}
          value={rest.motherName}
        />

        <label htmlFor='fatherName'>Father's Name:</label>
        <input
          type='text'
          id='fatherName'
          name='fatherName'
          onChange={handleOnChange}
          value={rest.fatherName}
        />

        <label htmlFor='motherMobile'>Mother's Mobile:</label>
        <input
          type='text'
          id='motherMobile'
          name='motherMobile'
          onChange={handleOnChange}
          value={rest.motherMobile}
        />

        <label htmlFor='fatherMobile'>Father's Mobile:</label>
        <input
          type='text'
          id='fatherMobile'
          name='fatherMobile'
          onChange={handleOnChange}
          value={rest.fatherMobile}
        />

        

       

       

        <button onClick={showSuccessToast} className='btn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formtable;
