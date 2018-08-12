export const GET_USERS = 'Get all users';
export const GET_USER_INFO = 'Get user info';




export const getUsers = data => ({ type: GET_USERS, data });
export const getUserInfo = data => ({ type: GET_USER_INFO, data });
