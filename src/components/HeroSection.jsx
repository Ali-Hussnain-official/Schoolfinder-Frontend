import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSchool, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    schoolType: 'All Types'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const searchSchool = () => {
    navigate('search-school', { state: { searchData } });
  };

  return (
    <section
      id="homePage"
      className="hero mt-[60px] h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      <div className="hero-content w-full max-w-[1200px] px-4 py-8">
        <h1 className="text-4xl font-semibold mb-0">Find the Perfect School for Your Child</h1>
        <p className="text-lg opacity-90 mb-12">
          Compare schools, read reviews, and make informed decisions for your child's education
        </p>

        <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-4 items-end shadow-lg max-w-[1000px] mx-auto text-left">
          {/* Location Input */}
          <div className="w-full md:flex-1">
            <label className="block mb-2 text-gray-800 font-medium text-sm">Location</label>
            <div className="relative flex items-center">
              <FaMapMarkerAlt className="absolute left-3 text-gray-600 text-lg" />
              <input
                type="text"
                name="location"
                placeholder="Enter city or area"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded text-gray-800 text-base focus:outline-none focus:border-blue-600"
                value={searchData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* School Type Select */}
          <div className="w-full md:flex-1">
            <label className="block mb-2 text-gray-800 font-medium text-sm">School Type</label>
            <div className="relative flex items-center">
              <FaSchool className="absolute left-3 text-gray-600 text-lg" />
              <select
                name="schoolType"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded text-gray-800 text-base focus:outline-none focus:border-blue-600 appearance-none"
                value={searchData.schoolType}
                onChange={handleInputChange}
              >
                <option>All Types</option>
                <option>Private School</option>
                <option>Public School</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            id="heroSearchBtn"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-base font-medium h-[45px] whitespace-nowrap flex items-center justify-center gap-2"
            onClick={searchSchool}
          >
            <FaSearch />
            <span>Search Schools</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;