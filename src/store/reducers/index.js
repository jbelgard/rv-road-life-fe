import { LOADING, REGISTER, LOGIN, ADD_VEHICLE } from '../actions';

const initialState = {
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case REGISTER:
      return {
        ...state,
        error: 'error',
        loading: false,
        data: [...state.data, { value: action.payload }]
      };
    case LOGIN:
      return {
        ...state,
        error: 'error',
        loading: false,
        data: [...state.data, { value: action.payload }]
      };
      case ADD_VEHICLE:
        return {
          ...state,
          error: 'error',
          loading: false,
          data: [...state.data, { value: action.payload }]
        };
    default:
      return state;
  }
};
