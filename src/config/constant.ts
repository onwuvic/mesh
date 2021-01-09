const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api/v1' : 'https://car.marnology.com';

export const orderUrl = `${BASE_URL}/orders`;
