import { type actionProps, ACTIONS } from '../actions/fetch';
export const initialState:initialState = {
  data: '',
  error: "",
  loading: false,
};
export interface initialState {
    data:unknown
    error:string
    loading:boolean
}
export const fetchReducer = (state:initialState, action: { type: any; payload: any; }):initialState => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
