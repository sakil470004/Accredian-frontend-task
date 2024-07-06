import  { useState } from 'react';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Refer & Earn</h1>
      <button 
        onClick={handleModal} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Refer Now
      </button>
      {isModalOpen && <ReferralModal handleModal={handleModal} />}
    </div>
  );
};

const ReferralModal = ({ handleModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Referral Form</h2>
        <ReferralForm />
        <button 
          onClick={handleModal} 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ReferralForm = () => {
  // Form implementation here
  return (
    <form>
      {/* Form Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Your Name</label>
        <input className="w-full px-3 py-2 border rounded" type="text" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Your Email</label>
        <input className="w-full px-3 py-2 border rounded" type="email" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Friend's Name</label>
        <input className="w-full px-3 py-2 border rounded" type="text" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Friend's Email</label>
        <input className="w-full px-3 py-2 border rounded" type="email" />
      </div>
      <button 
        type="submit" 
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default LandingPage;
