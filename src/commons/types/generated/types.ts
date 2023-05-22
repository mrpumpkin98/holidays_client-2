export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  board_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  title: Scalars['String'];
  user_: IUser;
};

export type IBoardReview = {
  __typename?: 'BoardReview';
  board_: IBoard;
  br_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  user_: IUser;
};

export enum IClAssad_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IClass = {
  __typename?: 'Class';
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  class_id: Scalars['String'];
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  image_: Array<IImage>;
  is_ad: Scalars['Int'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  user_: IUser;
};

export type IClassReview = {
  __typename?: 'ClassReview';
  class_: IClass;
  content: Scalars['String'];
  cr_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  grade: Scalars['Int'];
  user_: IUser;
};

export type IClassSchedule = {
  __typename?: 'ClassSchedule';
  class_: IClass;
  cs_id: Scalars['String'];
  date: Scalars['String'];
  remain: Scalars['Int'];
};

export type IClass_Ad = {
  __typename?: 'Class_Ad';
  amount: Scalars['Int'];
  ca_id: Scalars['String'];
  class_: IClass;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imp_uid: Scalars['String'];
  method: Scalars['String'];
  status: IClAssad_Status_Enum;
};

export type ICreateBoardInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  imageInput?: InputMaybe<Array<IImageInput>>;
  title: Scalars['String'];
};

export type ICreateBoardReviewInput = {
  board_id: Scalars['String'];
  content: Scalars['String'];
};

export type ICreateClassAdInput = {
  amount: Scalars['Int'];
  class_id: Scalars['String'];
  imp_uid: Scalars['String'];
  method: Scalars['String'];
};

export type ICreateClassInput = {
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  classSchedulesInput: Array<ICreateClassScheduleInput>;
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  imageInput: Array<IImageInput>;
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
};

export type ICreateClassReviewInput = {
  class_id: Scalars['String'];
  content: Scalars['String'];
  grade: Scalars['Int'];
};

export type ICreateClassScheduleInput = {
  date: Scalars['String'];
  remain: Scalars['Int'];
};

export type ICreateReservationInput = {
  class_id: Scalars['String'];
  personnel: Scalars['Int'];
  res_date: Scalars['String'];
};

export type ICreateUserInput = {
  birth_date?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  pwd: Scalars['String'];
};

export type IFetchClasses = {
  __typename?: 'FetchClasses';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchClassesPopular = {
  __typename?: 'FetchClassesPopular';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  price: Scalars['Int'];
  row_count: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchWishlists = {
  __typename?: 'FetchWishlists';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  board_: IBoard;
  class_: IClass;
  image_id: Scalars['String'];
  is_main: Scalars['Int'];
  magazine_: IMagazine;
  type: Scalars['Int'];
  url: Scalars['String'];
};

export type IImageInput = {
  is_main: Scalars['Int'];
  type: Scalars['Int'];
  url: Scalars['String'];
};

export type IMagazine = {
  __typename?: 'Magazine';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  magazine_id: Scalars['String'];
  title: Scalars['String'];
  user_: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelClassAd: IClass_Ad;
  createBoard: IBoard;
  createBoardReview: IBoardReview;
  createClass: IClass;
  createClassAd: IClass_Ad;
  createClassInquiry: Scalars['String'];
  createClassReview: IClassReview;
  createImage: Array<Scalars['String']>;
  createReservation: Scalars['String'];
  createUser: IUser;
  createWishlist: IWishlist;
  deleteBoard: Scalars['Boolean'];
  deleteBoardReview: Scalars['Boolean'];
  deleteClass: Scalars['Boolean'];
  deleteClassReview: Scalars['Boolean'];
  deleteReservation: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteWishlist: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  updateBoard: Scalars['Boolean'];
  updateBoardReview: IBoardReview;
  updateClass: Scalars['Boolean'];
  updateClassReview: IClassReview;
  updateUser: IUser;
  updateUserPwd: Scalars['Boolean'];
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCancelClassAdArgs = {
  createClassAdInput: ICreateClassAdInput;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBoardReviewArgs = {
  createBoardReviewInput: ICreateBoardReviewInput;
};


export type IMutationCreateClassArgs = {
  createClassInput: ICreateClassInput;
};


export type IMutationCreateClassAdArgs = {
  createClassAdInput: ICreateClassAdInput;
};


export type IMutationCreateClassInquiryArgs = {
  class_id: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationCreateClassReviewArgs = {
  createClassReviewInput: ICreateClassReviewInput;
};


export type IMutationCreateImageArgs = {
  board_: Scalars['String'];
  class_: Scalars['String'];
  imageInput: Array<IImageInput>;
  magazine_: Scalars['String'];
};


export type IMutationCreateReservationArgs = {
  createReservationInput: ICreateReservationInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateWishlistArgs = {
  class_id: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  board_id: Scalars['String'];
};


export type IMutationDeleteBoardReviewArgs = {
  br_id: Scalars['String'];
};


export type IMutationDeleteClassArgs = {
  class_id: Scalars['String'];
};


export type IMutationDeleteClassReviewArgs = {
  cr_id: Scalars['String'];
};


export type IMutationDeleteReservationArgs = {
  res_id: Scalars['String'];
};


export type IMutationDeleteWishlistArgs = {
  wishlist_id: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  pwd: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardReviewArgs = {
  updateBoardReviewInput: IUpdateBoardReviewInput;
};


export type IMutationUpdateClassArgs = {
  updateClassInput: IUpdateClassInput;
};


export type IMutationUpdateClassReviewArgs = {
  updateClassReviewInput: IUpdateClassReviewInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPwdArgs = {
  pwd: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoardDetail: IBoard;
  fetchBoardReviews: Array<IBoardReview>;
  fetchBoards: Array<IBoard>;
  fetchBoardsOfMine: Array<IBoard>;
  fetchClassDetail: IClass;
  fetchClassReviews: Array<IClassReview>;
  fetchClassSchedules: Array<IClassSchedule>;
  fetchClasses: Array<IFetchClasses>;
  fetchClassesAd: Array<IFetchClasses>;
  fetchClassesOfMine: Array<IFetchClasses>;
  fetchClassesPopular: Array<IFetchClassesPopular>;
  fetchLoginUser: IUser;
  fetchReservationsOfClass: Array<IReservation>;
  fetchReservationsOfUser: Array<IReservation>;
  fetchUserIdByPhone: IUser;
  fetchWishlists: Array<IFetchWishlists>;
};


export type IQueryFetchBoardDetailArgs = {
  board_id: Scalars['String'];
};


export type IQueryFetchBoardReviewsArgs = {
  board_id: Scalars['String'];
};


export type IQueryFetchClassDetailArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchClassReviewsArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchClassSchedulesArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchClassesArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchClassesAdArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchClassesPopularArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchReservationsOfClassArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchUserIdByPhoneArgs = {
  phone: Scalars['String'];
};

export enum IReservation_Status_Enum {
  Complete = 'COMPLETE',
  Waiting = 'WAITING'
}

export type IReservation = {
  __typename?: 'Reservation';
  class_: IClass;
  personnel: Scalars['Int'];
  res_date: Scalars['String'];
  res_id: Scalars['String'];
  status: IReservation_Status_Enum;
  user_: IUser;
};

export type IUpdateBoardInput = {
  birth_date: Scalars['String'];
  board_id: Scalars['String'];
  content: Scalars['String'];
  email: Scalars['String'];
  imageInput?: InputMaybe<Array<IImageInput>>;
  title: Scalars['String'];
};

export type IUpdateBoardReviewInput = {
  br_id: Scalars['String'];
  content: Scalars['String'];
};

export type IUpdateClassInput = {
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  classSchedulesInput: Array<ICreateClassScheduleInput>;
  class_id: Scalars['String'];
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  imageInput: Array<IImageInput>;
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
};

export type IUpdateClassReviewInput = {
  content: Scalars['String'];
  cr_id: Scalars['String'];
  grade: Scalars['Int'];
};

export type IUpdateUserInput = {
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  birth_date: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  type: Scalars['Int'];
  user_id: Scalars['String'];
};

export type IWishlist = {
  __typename?: 'Wishlist';
  class_: IClass;
  user_: IUser;
  wishlist_id: Scalars['String'];
};
