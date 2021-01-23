const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api/v1' : 'https://mesh-prod-api.herokuapp.com/api/v1';

export const orderUrl = `${BASE_URL}/orders`;
