// import { all, takeLatest } from 'redux-saga/effects';

// import { LoginTypes } from './login/types';
// import { RegisterCustomerTypes } from './registerCustomer/types';
// import { DocumentsTypes } from './documents/types';
// import { SocialTypes } from './social/types';
// import { CreatePostTypes } from './createPost/types';
// import { LikePostTypes } from './likePost/types';
// import { LikeCommentTypes } from './likeComment/types';
// import { CommentPostTypes } from './commentPost/types';
// import { CommentsPostTypes } from './commentsPost/types';
// import { CustomersTypes } from './customers/types';
// import { BranchsTypes } from './branchs/types';
// import { ProductsTypes } from './products/types';

// import { login } from './login/sagas';
// import { registerCustomer, registerOfflineCustomer } from './registerCustomer/sagas';
// import { getDocuments } from './documents/sagas';
// import { getPosts } from './social/sagas';
// import { createPost } from './createPost/sagas';
// import { likePost } from './likePost/sagas';
// import { likeComment } from './likeComment/sagas';
// import { commentPost } from './commentPost/sagas';
// import { getComments } from './commentsPost/sagas';
// import { getCustomers } from './customers/sagas';
// import { getBranchs } from './branchs/sagas';
// import { getProducts } from './products/sagas';

// export default function* rootSaga() {
//   return yield all([
//     takeLatest(LoginTypes.LOAD_REQUEST, login),
//     takeLatest(RegisterCustomerTypes.LOAD_REQUEST, registerCustomer),
//     takeLatest(RegisterCustomerTypes.LOAD_REQUEST_OFFLINE, registerOfflineCustomer),
//     takeLatest(DocumentsTypes.LOAD_REQUEST, getDocuments),
//     takeLatest(DocumentsTypes.LOAD_REFRESH, getDocuments),
//     takeLatest(SocialTypes.LOAD_REQUEST, getPosts),
//     takeLatest(SocialTypes.LOAD_REFRESH, getPosts),
//     takeLatest(CreatePostTypes.LOAD_REQUEST, createPost),
//     takeLatest(LikePostTypes.LOAD_REQUEST, likePost),
//     takeLatest(CommentPostTypes.LOAD_REQUEST, commentPost),
//     takeLatest(CommentsPostTypes.LOAD_REQUEST, getComments),
//     takeLatest(CommentsPostTypes.LOAD_REFRESH, getComments),
//     takeLatest(LikeCommentTypes.LOAD_REQUEST, likeComment),
//     takeLatest(CustomersTypes.LOAD_REQUEST, getCustomers),
//     takeLatest(CustomersTypes.LOAD_REFRESH, getCustomers),
//     takeLatest(BranchsTypes.LOAD_REQUEST, getBranchs),
//     takeLatest(ProductsTypes.LOAD_REQUEST, getProducts),
//     takeLatest(ProductsTypes.LOAD_REFRESH, getProducts),
//   ]);
// }
