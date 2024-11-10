import React, { useState } from 'react';
import { login } from '../services/apiService';
import { useUserStore } from '../store/userStore';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useUserStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { token } = await login(email, password);
    setToken(token);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        />
        
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="border border-gray-300 p-3 rounded-md mb-6 focus:outline-none focus:border-blue-500"
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
