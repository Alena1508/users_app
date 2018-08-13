import { rest } from './rest';

export const getUsers = () => rest.get('contact/');

export const getUserInfo = (id) => rest.get(`contact/${id}`);

export const deleteUser = id => rest.delete(`contact/${id}`);

export const updateUser = (data = {}) => rest.put('contact/', data);

