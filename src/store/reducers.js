import {
  GET_USERS,
  GET_USER_INFO,
  SET_USER,
  UPDATE_USER,
  REMOVE_USER
} from './actions';


export const usersList = (state = [], { type, data }) => {
  switch (type) {
    case GET_USERS: {
      return data || state;
    }

    case REMOVE_USER: {
      console.log('reducer', state);

      const newState = Object.assign({}, state);
      return newState;
    }
  }
  console.log(state);
  return state;
};

export const userInfo = (state = {}, { type, data }) => {
  switch (type) {
    case GET_USER_INFO: {
      return data;
    }
  }

  return state;
};

export const user = (state = false, { type, data }) => {
  switch (type) {
    case UPDATE_USER:
    case SET_USER:
    {
      return data;
    }

    // case REMOVE_USER:
    //   return null;
  }

  return state;
};

