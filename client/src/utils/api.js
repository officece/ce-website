// client/src/utils/api.js

const BASE_URL = 'http://localhost:5000/api';

export const customFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // If we have a token, inject it into the Authorization header
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};