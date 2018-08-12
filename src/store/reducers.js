import {
  GET_USERS,
  GET_USER_INFO
} from './actions';


export const usersList = (state = [], { type, data }) => {
  switch (type) {
    case GET_USERS: {
      console.log('aaaa11111111111aaaaaaaa', data);
      return data || state;
    }
  }
  return state;
};

export const userInfo = (state = {}, { type, data }) => {
  switch (type) {
    case GET_USER_INFO: {
      return data;
    }
  }

  console.log('sate', state);
  return state;
};


// export const user = (state = false, { type, data }) => {
//   switch (type) {
//     case SET_USER: {
//       return data;
//     }
//
//     // case REMOVE_USER:
//     //   return null;
//   }
//
//   return state;
// };