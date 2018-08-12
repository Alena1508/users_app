import { rest } from './rest';

export const getUsers = () => rest.get('contact/');

export const getUserInfo = (id) => rest.get(`contact/${id}`);

// export const updateUser = (task) => rest.put(`users/${task.id}`, task);

// export const createUser = (task) => rest.post('users', task);


// export const deleteUser = id => rest.delete(`users/${id}`);

