import axios from 'axios';

// Use Vercel serverless function in production, direct URL in development
const BASE_URL = import.meta.env.PROD 
  ? '/api/proxy' // Use Vercel serverless function in production
  : 'https://zenfinity-intern-api-104290304048.europe-west1.run.app';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
});

export const batteryApi = {
  getSummary: async (imei = null) => {
    const params = imei ? { imei } : {};
    const response = await api.get('/api/snapshots/summary', { params });
    // API returns {success: true, data: [...]}
    return response.data.data || response.data;
  },

  getSnapshots: async (imei, limit = 100, offset = 0) => {
    const response = await api.get('/api/snapshots', {
      params: { imei, limit, offset },
    });
    // API returns {success: true, data: [...]}
    return response.data.data || response.data;
  },

  getLatestSnapshot: async (imei) => {
    const response = await api.get(`/api/snapshots/${imei}/latest`);
    // API returns {success: true, data: {...}}
    return response.data.data || response.data;
  },

  getCycleDetails: async (imei, cycleNumber) => {
    const response = await api.get(`/api/snapshots/${imei}/cycles/${cycleNumber}`);
    // API returns {success: true, data: {...}}
    return response.data.data || response.data;
  },
};
