// import { createStore, applyMiddleware, Store } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage, {
//   AsyncStorageStatic,
// } from '@react-native-community/async-storage';

// import { LoginState } from './ducks/login/types';
// import { RegisterCustomerState } from './ducks/registerCustomer/types';
// import { RegisterProductState } from './ducks/registerProduct/types';
// import { DocumentsState } from './ducks/documents/types';
// import { SocialState } from './ducks/social/types';
// import { OrdersState } from './ducks/orders/types';
// import { CreatePostState } from './ducks/createPost/types';
// import { LikePostState } from './ducks/likePost/types';
// import { CommentPostState } from './ducks/commentPost/types';
// import { CommentsPostState } from './ducks/commentsPost/types';
// import { LikeCommentState } from './ducks/likeComment/types';
// import { CustomersState } from './ducks/customers/types';
// import { BranchsState } from './ducks/branchs/types';
// import { ProductsState } from './ducks/products/types';

// import rootReducer from './ducks/rootReducer';
// import rootSaga from './ducks/rootSaga';

// export interface ApplicationState {
//   login: LoginState;
//   registerCustomer: RegisterCustomerState;
//   registerProduct: RegisterProductState;
//   documents: DocumentsState;
//   social: SocialState;
//   orders: OrdersState;
//   createPost: CreatePostState;
//   likePost: LikePostState;
//   commentPost: CommentPostState;
//   commentsPost: CommentsPostState;
//   likeComment: LikeCommentState;
//   customers: CustomersState;
//   branchs: BranchsState;
//   products: ProductsState;
// }

// interface ReduxPersist {
//   key: string;
//   whitelist: string[];
//   storage: AsyncStorageStatic;
// }

// const persistConfig: ReduxPersist = {
//   key: 'root',
//   whitelist: ['login', 'registerCustomer'],
//   storage: AsyncStorage,
// };

// const sagaMiddleware = createSagaMiddleware();

// const store: Store<ApplicationState> = createStore(
//   persistReducer(persistConfig, rootReducer),
//   applyMiddleware(sagaMiddleware),
// );

// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export default { store, persistor };
