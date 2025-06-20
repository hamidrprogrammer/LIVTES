import createApiClient from "./apiClient";

// TODO: Replace with actual environment variable
const API_BASE_URL = "https://api.lumivitaeglobal.com/api"; 

const api = createApiClient(API_BASE_URL);

export default api;


