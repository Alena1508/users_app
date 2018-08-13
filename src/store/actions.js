export const GET_USERS = 'Get all users';
export const GET_USER_INFO = 'Get user info';
export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove existing user';




export const getUsers = data => ({ type: GET_USERS, data });
export const getUserInfo = data => ({ type: GET_USER_INFO, data });
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const deleteUser = data => ({ type: REMOVE_USER, data });
