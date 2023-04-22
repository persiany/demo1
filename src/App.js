import React from 'react';

const ExpertAppointmentMarketplace = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-9/12 mx-auto">
      <div className="bg-gray-200 text-gray-700 text-lg font-bold py-2 px-4 mb-4">Upcoming Appointments</div>
      <div className="px-4 py-2">
        <div className="flex flex-wrap justify-between items-center border-b-2 py-2">
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <img src="https://source.unsplash.com/random/500x500" alt="Expert Avatar" className="w-16 h-16 rounded-full" />
          </div>
          <div className="w-full sm:flex-grow sm:flex sm:items-center">
            <div className="text-lg font-medium text-gray-800 sm:ml-4">Ahmed Aliev</div>
            <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center border-b-2 py-2">
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <img src="https://source.unsplash.com/random/500x501" alt="Expert Avatar" className="w-16 h-16 rounded-full" />
          </div>
          <div className="w-full sm:flex-grow sm:flex sm:items-center">
            <div className="text-lg font-medium text-gray-800 sm:ml-4">Julia London</div>
            <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center border-b-2 py-2">
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <img src="https://source.unsplash.com/random/500x502" alt="Expert Avatar" className="w-16 h-16 rounded-full" />
          </div>
          <div className="w-full sm:flex-grow sm:flex sm:items-center">
            <div className="text-lg font-medium text-gray-800 sm:ml-4">Adam Smith</div>
            <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAppointmentMarketplace;