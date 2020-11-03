// /**
//  * Actions types
//  */

// export enum RegisterProductTypes {
//   LOAD_REQUEST = '@registerProduct/LOAD_REQUEST',
//   LOAD_SUCCESS = '@registerProduct/LOAD_SUCCESS',
//   LOAD_FAILURE = '@registerProduct/LOAD_FAILURE',
//   ADD_OFFLINE = '@registerProduct/ADD_OFFLINE',
//   UPDATE_OFFLINE = '@registerProduct/UPDATE_OFFLINE',
//   REMOVE_OFFLINE = '@registerProduct/REMOVE_OFFLINE',
//   SET_ACTUAL_OFFLINE = '@registerProduct/SET_ACTUAL_OFFLINE',
// }

// export interface IProduct {
//   id: number;
//   nameProduct: string
//   code: string
//   ean: string
//   manufacturer: string
//   package: string
// }

// /**
//  * State type
//  */
// // formato do estado que vai armazernar no reducer
// export interface RegisterProductState {
//   // como o estado do redux é imutavel, coloca um readonly
//   readonly loading: boolean;
//   readonly error: boolean;
//   readonly actual: null | number;
//   readonly offlineData: IProduct[];
// }
