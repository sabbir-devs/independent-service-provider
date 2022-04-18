import React from "react";
import toast from "react-hot-toast";
import "./Booking.css";

const Booking = () => {
    const handleOnSubmit = (event) => {
        event.preventDefault()
       event.target.email.value = ''
        event.target.phone.value = '';
        event.target.name.value = '';
        event.target.massage.value = '';
        toast.success("thank you for the booking", {id:'toast3'})
    }
  return (
    <div className="booking">
      <form onSubmit={handleOnSubmit}>
        <div
        className="form-input"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{display:'grid'}} className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" id="" />
          </div>
          <div style={{display:'grid'}} className="form-input">
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" placeholder="phone" id="" />
          </div>
        </div>
        <div style={{display:'grid', width:'400px'}} className="form-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" id="" />
        </div>
        <div className="form-input">
          <label htmlFor="massage">Your Address</label>
          <textarea name="massage" id="" cols="50" rows="5" placeholder="Your Address..." style={{width:'400px', padding:'10px', height:'150px'}}></textarea>
        </div>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Booking;
