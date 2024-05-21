import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TopNavbar from "../Components/TopNavbar";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", formData);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Data has been collected and sent to the database.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error submitting the form.',
      });
    }
  };

  return (
    <div>
      <TopNavbar />
      <div className="container mx-auto px-8">
        <h2 className="text-[30px] mt-5 text-center">Sign Up</h2>
        <p className="text-[16px] text-center mb-8">
          <span className="text-[16px] font-semibold">Join the PhotoFlex Community!</span> Unleash your creativity and discover a world of stunning visuals. Sign up now to bookmark your favorites, upload your own images, and connect with other image enthusiasts. Dive into the universe of high-quality images with PhotoFlex. Your journey towards visual discovery starts here!
        </p>
        <form onSubmit={handleSubmit} className="card-info mx-auto text-center shadow-[0px_1px_2px_1px_rgba(245,204,245,1);] rounded-[20px] py-10">
          <div className="mx-auto w-2/6 mb-8">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="text-[19px] bg-white w-full px-3 py-1 rounded"
            />
          </div>

          <div className="mx-auto w-2/6 mb-8">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="text-[19px] bg-white w-full px-3 py-1 rounded"
            />
          </div>
          <div className="mx-auto w-2/6 mb-8">
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="Zip Code"
              required
              className="text-[19px] bg-white w-full px-3 py-1 rounded"
            />
          </div>
          <button className="text-white bg-[#6BB4B4] px-4 py-2 rounded-[5px]" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
