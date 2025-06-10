import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authAPI';

const SignupForm = ({ logo }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name?.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role?.value || 'customer'
    };

    if (e.target.password.value !== e.target['confirm-password'].value) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await registerUser(formData);
      console.log('Registration successful:', response);
      
      // Redirect to login or dashboard
      navigate('/signin', { state: { registrationSuccess: true } });
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-white-500">
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-bold italic text-green-600 dark:text-green">
          <img className="w-24 h-16 mr-2" src={logo} alt="logo" />
          Gebeya Agricultural products    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-Ivory-900 dark:border-Celadon-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-green-500 md:text-2xl dark:text-green">
              Create an account
            </h1>
            
            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
                {error}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-700 dark:text-green">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-700 dark:text-green">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="gebeya@company.com"
                  required
                />
              </div>

              {/* Password fields */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-green-700 dark:text-green">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  minLength="6"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-green-700 dark:text-green">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  minLength="6"
                />
              </div>

              {/* Terms checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-700">I accept the
                    <Link to="/terms" className="font-medium text-green-700 hover:underline dark:text-primary-500">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full font-semibold italic text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 transition duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Creating account...' : 'Create an account'}
              </button>
              
              <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                Already have an account? <Link to="/signin" className="font-medium text-green-700 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;