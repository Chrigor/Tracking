// const INITIAL_STATE = {
//   data: [],
//   error: false,
//   loading: false,
// };

// import { Reducer } from 'redux';
// import { RegisterProductState, RegisterProductTypes, IProduct } from './types';

// const INITIAL_STATE: RegisterProductState = {
//   error: false,
//   loading: false,
//   offlineData: [],
//   actual: null,
// };

// const reducer: Reducer<RegisterProductState> = (
//   state = INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     case RegisterProductTypes.LOAD_REQUEST:
//       return { ...state, loading: true, error: false };
//     case RegisterProductTypes.LOAD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//       };
//     case RegisterProductTypes.LOAD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     case RegisterProductTypes.ADD_OFFLINE:
//       return {
//         ...state,
//         offlineData: [
//           ...state.offlineData,
//           { id: state.offlineData.length, ...action.payload.data },
//         ],
//       };
//     case RegisterProductTypes.UPDATE_OFFLINE:
//       return {
//         ...state,
//         offlineData: state.offlineData.map((Product: IProduct) =>
//           Product.id === action.payload.id
//             ? action.payload.data
//             : Product,
//         ),
//       };
//     case RegisterProductTypes.REMOVE_OFFLINE:
//       return {
//         ...state,
//         offlineData: state.offlineData.filter((Product: IProduct) =>
//           Product.id !== action.payload.id,
//         ),
//       };
//     case RegisterProductTypes.SET_ACTUAL_OFFLINE:
//       return {
//         ...state,
//         actual: action.payload.id,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
