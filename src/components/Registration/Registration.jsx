import React, { useState } from 'react';
import bg from '../../assets/bg3.jpeg';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    region: '',
    email: '',
    kebeleId: null,
    certificate: null,
    phone: '',
    address: '',
    listOfProducts: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl border-4 border-green-300"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Wholesaler Registration</h2>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
            placeholder="Your full name on your kebele ID"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="sex">
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="region">
            Region
          </label>
          <select
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Region</option>
            <option value="Addis Ababa">Addis Ababa</option>
            <option value="Afar">Afar</option>
            <option value="Amhara">Amhara</option>
            <option value="Benisangul-Gumuz">Benisangul-Gumuz</option>
            <option value="Dire Dawa">Dire Dawa</option>
            <option value="Gambela">Gambela</option>
            <option value="Harar">Harar</option>
            <option value="Oromia">Oromia</option>
            <option value="Sidama">Sidama</option>
            <option value="Somali">Somali</option>
            <option value="South-Ethiopia">South Ethiopia</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
            placeholder="+251-123-456-789"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
            rows="3"
            placeholder="Simple and clear description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="listOfProducts">
            List of Products
          </label>
          <textarea
            name="listOfProducts"
            id="listOfProducts"
            value={formData.listOfProducts}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
            rows="3"
            placeholder="List products that you can offer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="kebeleId">
            Scanned Kebele ID
          </label>
          <input
            type="file"
            id="kebeleId"
            name="kebeleId"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png,.pdf"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="certificate">
            Government Certificate
          </label>
          <input
            type="file"
            id="certificate"
            name="certificate"
            onChange={handleChange}
            required
            accept=".jpg,.jpeg,.png,.pdf"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;