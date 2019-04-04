import { properties } from '../config/ApplicationConfig.js';

export const getTickets = () => {
  return fetch(properties.urlGetTickets).then(res => res.json())
}