import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface CommentMutationResponse extends IMutationResponse {
  __typename?: 'CommentMutationResponse';
  code: Scalars['Float'];
  comment?: Maybe<PostComment>;
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface CommentPostShareMutationResponse extends IMutationResponse {
  __typename?: 'CommentPostShareMutationResponse';
  code: Scalars['Float'];
  comment?: Maybe<PostShareComment>;
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface CreateCommentPostInput {
  content: Scalars['String'];
  post_id: Scalars['ID'];
}

export interface CreateCommentPostShareInput {
  content: Scalars['String'];
  post_share_id: Scalars['ID'];
}

export interface CreateMessageInput {
  content: Scalars['String'];
  room_id?: InputMaybe<Scalars['Float']>;
  to_id: Scalars['Float'];
}

export interface CreatePostInput {
  caption?: InputMaybe<Scalars['String']>;
  image_link?: InputMaybe<Scalars['String']>;
  video_link?: InputMaybe<Scalars['String']>;
  youtube_link?: InputMaybe<Scalars['String']>;
}

export interface CreatePostShareInput {
  caption?: InputMaybe<Scalars['String']>;
  post_id: Scalars['ID'];
}

export interface FieldError {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
}

export interface IMutationResponse {
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface LoginInput {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
}

export interface Message {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSender: Scalars['Boolean'];
  receiver?: Maybe<User>;
  room: Room;
  seen: Array<User>;
  sender?: Maybe<User>;
  updatedAt: Scalars['DateTime'];
}

export interface MessageMutationResponse extends IMutationResponse {
  __typename?: 'MessageMutationResponse';
  chat_message?: Maybe<Message>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface Mutation {
  __typename?: 'Mutation';
  commentPostShare: CommentPostShareMutationResponse;
  createCommentPost: CommentMutationResponse;
  createPost: PostMutationResponse;
  createPostShare: PostShareMutationResponse;
  deleteCommentPost: PostMutationResponse;
  deleteCommentPostShare: MutationResponse;
  deletePost: PostMutationResponse;
  deletePostShare: PostShareMutationResponse;
  deleteReplyCommentPost: PostMutationResponse;
  deleteReplyCommentPostShare: MutationResponse;
  followUser: UserMutationResponse;
  likeCommentPost: PostMutationResponse;
  likeCommentPostShare: CommentPostShareMutationResponse;
  likePost: PostMutationResponse;
  likePostShare: PostShareMutationResponse;
  likeReplyCommentPost: PostMutationResponse;
  likeReplyCommentPostShare: ReplyCommentPostShareMutationResponse;
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  replyCommentPost: ReplyCommentMutationResponse;
  replyCommentPostShare: ReplyCommentPostShareMutationResponse;
  sendMessage: MessageMutationResponse;
  updateCommentPost: CommentMutationResponse;
  updateCommentPostShare: CommentPostShareMutationResponse;
  updatePost: PostMutationResponse;
  updatePostShare: PostShareMutationResponse;
  uploadMultiple: Array<Scalars['String']>;
  uploadSingle: Scalars['String'];
}


export interface MutationCommentPostShareArgs {
  createCommentInput: CreateCommentPostShareInput;
}


export interface MutationCreateCommentPostArgs {
  createCommentInput: CreateCommentPostInput;
}


export interface MutationCreatePostArgs {
  createPostInput: CreatePostInput;
}


export interface MutationCreatePostShareArgs {
  createPostInput: CreatePostShareInput;
}


export interface MutationDeleteCommentPostArgs {
  comment_id: Scalars['Float'];
}


export interface MutationDeleteCommentPostShareArgs {
  comment_id: Scalars['Float'];
}


export interface MutationDeletePostArgs {
  post_id: Scalars['Float'];
}


export interface MutationDeletePostShareArgs {
  post_share_id: Scalars['Float'];
}


export interface MutationDeleteReplyCommentPostArgs {
  reply_comment_id: Scalars['Float'];
}


export interface MutationDeleteReplyCommentPostShareArgs {
  reply_comment_id: Scalars['Float'];
}


export interface MutationFollowUserArgs {
  user_id: Scalars['Float'];
}


export interface MutationLikeCommentPostArgs {
  comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}


export interface MutationLikeCommentPostShareArgs {
  comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}


export interface MutationLikePostArgs {
  like_type: Scalars['String'];
  post_id: Scalars['ID'];
}


export interface MutationLikePostShareArgs {
  like_type: Scalars['String'];
  post_share_id: Scalars['ID'];
}


export interface MutationLikeReplyCommentPostArgs {
  like_type: Scalars['String'];
  reply_comment_id: Scalars['ID'];
}


export interface MutationLikeReplyCommentPostShareArgs {
  like_type: Scalars['String'];
  reply_comment_id: Scalars['ID'];
}


export interface MutationLoginArgs {
  loginInput: LoginInput;
}


export interface MutationRegisterArgs {
  registerInput: RegisterInput;
}


export interface MutationReplyCommentPostArgs {
  replyCommentPostInput: ReplyCommentPostInput;
}


export interface MutationReplyCommentPostShareArgs {
  replyCommentPostInput: ReplyCommentPostShareInput;
}


export interface MutationSendMessageArgs {
  createMessageInput: CreateMessageInput;
}


export interface MutationUpdateCommentPostArgs {
  updateCommentInput: UpdateCommentPostInput;
}


export interface MutationUpdateCommentPostShareArgs {
  updateCommentInput: UpdateCommentPostShareInput;
}


export interface MutationUpdatePostArgs {
  updatePostInput: UpdatePostInput;
}


export interface MutationUpdatePostShareArgs {
  updatePostShareInput: UpdatePostShareInput;
}


export interface MutationUploadMultipleArgs {
  files: Array<Scalars['Upload']>;
}


export interface MutationUploadSingleArgs {
  file: Scalars['Upload'];
}

export interface MutationResponse {
  __typename?: 'MutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface Post {
  __typename?: 'Post';
  caption?: Maybe<Scalars['String']>;
  comment_count: Scalars['Float'];
  comments: Array<PostComment>;
  content_type: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image_link?: Maybe<Scalars['String']>;
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostLike>;
  owner: User;
  post_type: Scalars['String'];
  share_count: Scalars['Float'];
  shares: Array<PostShare>;
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  video_link?: Maybe<Scalars['String']>;
  youtube_link?: Maybe<Scalars['String']>;
}

export interface PostComment {
  __typename?: 'PostComment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostCommentLike>;
  owner: User;
  post: Post;
  reply_comments: Array<PostReplyComment>;
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface PostCommentLike {
  __typename?: 'PostCommentLike';
  comment: PostComment;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  updatedAt: Scalars['DateTime'];
}

export interface PostLike {
  __typename?: 'PostLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  post: Post;
  updatedAt: Scalars['DateTime'];
}

export interface PostMutationResponse extends IMutationResponse {
  __typename?: 'PostMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  post?: Maybe<Post>;
  success: Scalars['Boolean'];
}

export interface PostReplyComment {
  __typename?: 'PostReplyComment';
  comment: PostComment;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostReplyCommentLike>;
  owner: User;
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface PostReplyCommentLike {
  __typename?: 'PostReplyCommentLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  reply_comment: PostReplyComment;
  updatedAt: Scalars['DateTime'];
}

export interface PostShare {
  __typename?: 'PostShare';
  caption?: Maybe<Scalars['String']>;
  comment_count: Scalars['Float'];
  comments: Array<PostShareComment>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostShareLike>;
  owner: User;
  post: Post;
  post_type: Scalars['String'];
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface PostShareComment {
  __typename?: 'PostShareComment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostShareCommentLike>;
  owner: User;
  post_share: PostShare;
  reply_comments: Array<PostShareReplyComment>;
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface PostShareCommentLike {
  __typename?: 'PostShareCommentLike';
  comment: PostShareComment;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  updatedAt: Scalars['DateTime'];
}

export interface PostShareLike {
  __typename?: 'PostShareLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  post_share: PostShare;
  updatedAt: Scalars['DateTime'];
}

export interface PostShareMutationResponse extends IMutationResponse {
  __typename?: 'PostShareMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  post?: Maybe<PostShare>;
  success: Scalars['Boolean'];
}

export interface PostShareReplyComment {
  __typename?: 'PostShareReplyComment';
  comment: PostShareComment;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_count: Scalars['Float'];
  like_type?: Maybe<Scalars['String']>;
  liked: Scalars['Boolean'];
  likes: Array<PostShareReplyCommentLike>;
  owner: User;
  timestamp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface PostShareReplyCommentLike {
  __typename?: 'PostShareReplyCommentLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  like_type: Scalars['String'];
  owner: User;
  reply_comment: PostShareReplyComment;
  updatedAt: Scalars['DateTime'];
}

export type PostType = Post | PostShare;

export interface Query {
  __typename?: 'Query';
  getAllUser: Array<User>;
  getMyUser?: Maybe<User>;
  getPost?: Maybe<Post>;
  getPostShare?: Maybe<PostShare>;
  getPosts: Array<PostType>;
  initRoom: Scalars['Boolean'];
}


export interface QueryGetPostArgs {
  post_id: Scalars['ID'];
}


export interface QueryGetPostShareArgs {
  post_id: Scalars['ID'];
}

export interface RegisterInput {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  username: Scalars['String'];
}

export interface ReplyCommentMutationResponse extends IMutationResponse {
  __typename?: 'ReplyCommentMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  reply_comment?: Maybe<PostReplyComment>;
  success: Scalars['Boolean'];
}

export interface ReplyCommentPostInput {
  comment_id: Scalars['ID'];
  content: Scalars['String'];
}

export interface ReplyCommentPostShareInput {
  comment_id: Scalars['ID'];
  content: Scalars['String'];
}

export interface ReplyCommentPostShareMutationResponse extends IMutationResponse {
  __typename?: 'ReplyCommentPostShareMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  reply_comment?: Maybe<PostReplyComment>;
  success: Scalars['Boolean'];
}

export interface Room {
  __typename?: 'Room';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  last_message: Scalars['String'];
  members: Array<User>;
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}

export interface Subscription {
  __typename?: 'Subscription';
  getRooms: Array<Room>;
  receiveMessage: Message;
}

export interface UpdateCommentPostInput {
  content: Scalars['String'];
  id: Scalars['ID'];
}

export interface UpdateCommentPostShareInput {
  content: Scalars['String'];
  id: Scalars['ID'];
}

export interface UpdatePostInput {
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image_link?: InputMaybe<Scalars['String']>;
  video_link?: InputMaybe<Scalars['String']>;
  youtube_link?: InputMaybe<Scalars['String']>;
}

export interface UpdatePostShareInput {
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
}

export interface User {
  __typename?: 'User';
  avatar: Scalars['String'];
  comments_post: Array<PostComment>;
  comments_post_share: Array<PostShareComment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  followers: Array<User>;
  following: Array<User>;
  id: Scalars['ID'];
  isFollowed: Scalars['Boolean'];
  likes_comment_post: Array<PostCommentLike>;
  likes_comment_post_share: Array<PostShareCommentLike>;
  likes_post: Array<PostLike>;
  likes_post_share: Array<PostShareLike>;
  likes_reply_comment_post: Array<PostReplyCommentLike>;
  likes_reply_comment_post_share: Array<PostShareReplyCommentLike>;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  posts: Array<Post>;
  posts_share: Array<PostShare>;
  reply_comments_post: Array<PostReplyComment>;
  reply_comments_post_share: Array<PostShareReplyComment>;
  rooms: Array<Room>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
}

export interface UserMutationResponse extends IMutationResponse {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

type MutationResponseCommentMutationResponseFragment = { __typename?: 'CommentMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponseCommentPostShareMutationResponseFragment = { __typename?: 'CommentPostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponseMessageMutationResponseFragment = { __typename?: 'MessageMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponsePostMutationResponseFragment = { __typename?: 'PostMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponsePostShareMutationResponseFragment = { __typename?: 'PostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponseReplyCommentMutationResponseFragment = { __typename?: 'ReplyCommentMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponseReplyCommentPostShareMutationResponseFragment = { __typename?: 'ReplyCommentPostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

type MutationResponseUserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

export type MutationResponseFragment = MutationResponseCommentMutationResponseFragment | MutationResponseCommentPostShareMutationResponseFragment | MutationResponseMessageMutationResponseFragment | MutationResponsePostMutationResponseFragment | MutationResponsePostShareMutationResponseFragment | MutationResponseReplyCommentMutationResponseFragment | MutationResponseReplyCommentPostShareMutationResponseFragment | MutationResponseUserMutationResponseFragment;

export type UserInfoFragment = { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string };

export type UserFollowFragment = { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean };

export type CommentPostFragment = { __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> };

export type ReplyCommentPostFragment = { __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } };

export type CommentPostShareFragment = { __typename?: 'PostShareComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> };

export type ReplyCommentPostShareFragment = { __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } };

export type PostInfoFragment = { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> };

export type PostShareInfoFragment = { __typename?: 'PostShare', id: string, caption?: string | null, post_type: string, like_count: number, comment_count: number, like_type?: string | null, liked: boolean, timestamp: string, comments: Array<{ __typename?: 'PostShareComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, post: { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Post', id: string } | { __typename?: 'PostShare', id: string }> };

export type GetPostQueryVariables = Exact<{
  post_id: Scalars['ID'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost?: { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } | null };

export type CommentPostMutationVariables = Exact<{
  createCommentInput: CreateCommentPostInput;
}>;


export type CommentPostMutation = { __typename?: 'Mutation', createCommentPost: { __typename?: 'CommentMutationResponse', code: number, success: boolean, message: string, comment?: { __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LikePostMutationVariables = Exact<{
  post_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: { __typename?: 'PostMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostMutationResponse', code: number, success: boolean, message: string, post?: { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LikeCommentPostMutationVariables = Exact<{
  comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikeCommentPostMutation = { __typename?: 'Mutation', likeCommentPost: { __typename?: 'PostMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type ReplyCommentPostMutationVariables = Exact<{
  replyCommentInput: ReplyCommentPostInput;
}>;


export type ReplyCommentPostMutation = { __typename?: 'Mutation', replyCommentPost: { __typename?: 'ReplyCommentMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LikeReplyCommentPostMutationVariables = Exact<{
  reply_comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikeReplyCommentPostMutation = { __typename?: 'Mutation', likeReplyCommentPost: { __typename?: 'PostMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SharePostMutationVariables = Exact<{
  createPostInput: CreatePostShareInput;
}>;


export type SharePostMutation = { __typename?: 'Mutation', createPostShare: { __typename?: 'PostShareMutationResponse', code: number, success: boolean, message: string, post?: { __typename?: 'PostShare', id: string, caption?: string | null, post_type: string, like_count: number, comment_count: number, like_type?: string | null, liked: boolean, timestamp: string, comments: Array<{ __typename?: 'PostShareComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, post: { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetPostShareQueryVariables = Exact<{
  post_share_id: Scalars['ID'];
}>;


export type GetPostShareQuery = { __typename?: 'Query', getPostShare?: { __typename?: 'PostShare', id: string, caption?: string | null, post_type: string, like_count: number, comment_count: number, like_type?: string | null, liked: boolean, timestamp: string, comments: Array<{ __typename?: 'PostShareComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, post: { __typename?: 'Post', id: string, caption?: string | null, content_type: string, post_type: string, liked: boolean, like_type?: string | null, like_count: number, comment_count: number, share_count: number, image_link?: string | null, video_link?: string | null, youtube_link?: string | null, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string }, comments: Array<{ __typename?: 'PostComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> }>, shares: Array<{ __typename?: 'PostShare', id: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } } | null };

export type LikePostShareMutationVariables = Exact<{
  post_share_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikePostShareMutation = { __typename?: 'Mutation', likePostShare: { __typename?: 'PostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CommentPostShareMutationVariables = Exact<{
  createCommentInput: CreateCommentPostShareInput;
}>;


export type CommentPostShareMutation = { __typename?: 'Mutation', commentPostShare: { __typename?: 'CommentPostShareMutationResponse', code: number, success: boolean, message: string, comment?: { __typename?: 'PostShareComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean }, reply_comments: Array<{ __typename?: 'PostShareReplyComment', id: string, liked: boolean, like_type?: string | null, content: string, timestamp: string, owner: { __typename?: 'User', id: string, name: string, username: string, avatar: string, isFollowed: boolean } }> } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LikeCommentPostShareMutationVariables = Exact<{
  comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikeCommentPostShareMutation = { __typename?: 'Mutation', likeCommentPostShare: { __typename?: 'CommentPostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type ReplyCommentPostShareMutationVariables = Exact<{
  replyCommentPostInput: ReplyCommentPostShareInput;
}>;


export type ReplyCommentPostShareMutation = { __typename?: 'Mutation', replyCommentPostShare: { __typename?: 'ReplyCommentPostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LikeReplyCommentPostShareMutationVariables = Exact<{
  reply_comment_id: Scalars['ID'];
  like_type: Scalars['String'];
}>;


export type LikeReplyCommentPostShareMutation = { __typename?: 'Mutation', likeReplyCommentPostShare: { __typename?: 'ReplyCommentPostShareMutationResponse', code: number, success: boolean, message: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { __typename?: 'Query', getMyUser?: { __typename?: 'User', id: string, name: string, username: string, email: string, phoneNumber: string, avatar: string } | null };

export const MutationResponseFragmentDoc = gql`
    fragment mutationResponse on IMutationResponse {
  code
  success
  message
  errors {
    field
    message
  }
}
    `;
export const UserFollowFragmentDoc = gql`
    fragment userFollow on User {
  id
  name
  username
  avatar
  isFollowed
}
    `;
export const ReplyCommentPostShareFragmentDoc = gql`
    fragment replyCommentPostShare on PostShareReplyComment {
  id
  liked
  like_type
  content
  timestamp
  owner {
    ...userFollow
  }
}
    ${UserFollowFragmentDoc}`;
export const CommentPostShareFragmentDoc = gql`
    fragment commentPostShare on PostShareComment {
  id
  liked
  like_type
  content
  timestamp
  owner {
    ...userFollow
  }
  reply_comments {
    ...replyCommentPostShare
  }
}
    ${UserFollowFragmentDoc}
${ReplyCommentPostShareFragmentDoc}`;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  id
  name
  username
  email
  phoneNumber
  avatar
}
    `;
export const ReplyCommentPostFragmentDoc = gql`
    fragment replyCommentPost on PostReplyComment {
  id
  liked
  like_type
  content
  timestamp
  owner {
    ...userFollow
  }
}
    ${UserFollowFragmentDoc}`;
export const CommentPostFragmentDoc = gql`
    fragment commentPost on PostComment {
  id
  liked
  like_type
  content
  timestamp
  owner {
    ...userFollow
  }
  reply_comments {
    ...replyCommentPost
  }
}
    ${UserFollowFragmentDoc}
${ReplyCommentPostFragmentDoc}`;
export const PostInfoFragmentDoc = gql`
    fragment postInfo on Post {
  id
  caption
  content_type
  post_type
  liked
  like_type
  like_count
  comment_count
  share_count
  image_link
  video_link
  youtube_link
  timestamp
  post_type
  owner {
    ...userInfo
  }
  comments {
    ...commentPost
  }
  shares {
    id
    owner {
      ...userFollow
    }
  }
}
    ${UserInfoFragmentDoc}
${CommentPostFragmentDoc}
${UserFollowFragmentDoc}`;
export const PostShareInfoFragmentDoc = gql`
    fragment postShareInfo on PostShare {
  id
  caption
  post_type
  like_count
  comment_count
  like_type
  liked
  timestamp
  comments {
    ...commentPostShare
  }
  owner {
    ...userInfo
  }
  post {
    ...postInfo
  }
}
    ${CommentPostShareFragmentDoc}
${UserInfoFragmentDoc}
${PostInfoFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
    override document = LogoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostsDocument = gql`
    query GetPosts {
  getPosts {
    ... on Post {
      id
    }
    ... on PostShare {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostsGQL extends Apollo.Query<GetPostsQuery, GetPostsQueryVariables> {
    override document = GetPostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostDocument = gql`
    query GetPost($post_id: ID!) {
  getPost(post_id: $post_id) {
    ...postInfo
  }
}
    ${PostInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostGQL extends Apollo.Query<GetPostQuery, GetPostQueryVariables> {
    override document = GetPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentPostDocument = gql`
    mutation CommentPost($createCommentInput: CreateCommentPostInput!) {
  createCommentPost(createCommentInput: $createCommentInput) {
    ...mutationResponse
    comment {
      ...commentPost
    }
  }
}
    ${MutationResponseFragmentDoc}
${CommentPostFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentPostGQL extends Apollo.Mutation<CommentPostMutation, CommentPostMutationVariables> {
    override document = CommentPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikePostDocument = gql`
    mutation LikePost($post_id: ID!, $like_type: String!) {
  likePost(post_id: $post_id, like_type: $like_type) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikePostGQL extends Apollo.Mutation<LikePostMutation, LikePostMutationVariables> {
    override document = LikePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostDocument = gql`
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    ...mutationResponse
    post {
      ...postInfo
    }
  }
}
    ${MutationResponseFragmentDoc}
${PostInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    override document = CreatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeCommentPostDocument = gql`
    mutation LikeCommentPost($comment_id: ID!, $like_type: String!) {
  likeCommentPost(comment_id: $comment_id, like_type: $like_type) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeCommentPostGQL extends Apollo.Mutation<LikeCommentPostMutation, LikeCommentPostMutationVariables> {
    override document = LikeCommentPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReplyCommentPostDocument = gql`
    mutation ReplyCommentPost($replyCommentInput: ReplyCommentPostInput!) {
  replyCommentPost(replyCommentPostInput: $replyCommentInput) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ReplyCommentPostGQL extends Apollo.Mutation<ReplyCommentPostMutation, ReplyCommentPostMutationVariables> {
    override document = ReplyCommentPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeReplyCommentPostDocument = gql`
    mutation LikeReplyCommentPost($reply_comment_id: ID!, $like_type: String!) {
  likeReplyCommentPost(reply_comment_id: $reply_comment_id, like_type: $like_type) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeReplyCommentPostGQL extends Apollo.Mutation<LikeReplyCommentPostMutation, LikeReplyCommentPostMutationVariables> {
    override document = LikeReplyCommentPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SharePostDocument = gql`
    mutation SharePost($createPostInput: CreatePostShareInput!) {
  createPostShare(createPostInput: $createPostInput) {
    ...mutationResponse
    post {
      ...postShareInfo
    }
  }
}
    ${MutationResponseFragmentDoc}
${PostShareInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SharePostGQL extends Apollo.Mutation<SharePostMutation, SharePostMutationVariables> {
    override document = SharePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostShareDocument = gql`
    query GetPostShare($post_share_id: ID!) {
  getPostShare(post_id: $post_share_id) {
    ...postShareInfo
  }
}
    ${PostShareInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostShareGQL extends Apollo.Query<GetPostShareQuery, GetPostShareQueryVariables> {
    override document = GetPostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikePostShareDocument = gql`
    mutation LikePostShare($post_share_id: ID!, $like_type: String!) {
  likePostShare(post_share_id: $post_share_id, like_type: $like_type) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikePostShareGQL extends Apollo.Mutation<LikePostShareMutation, LikePostShareMutationVariables> {
    override document = LikePostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentPostShareDocument = gql`
    mutation CommentPostShare($createCommentInput: CreateCommentPostShareInput!) {
  commentPostShare(createCommentInput: $createCommentInput) {
    ...mutationResponse
    comment {
      ...commentPostShare
    }
  }
}
    ${MutationResponseFragmentDoc}
${CommentPostShareFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentPostShareGQL extends Apollo.Mutation<CommentPostShareMutation, CommentPostShareMutationVariables> {
    override document = CommentPostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeCommentPostShareDocument = gql`
    mutation LikeCommentPostShare($comment_id: ID!, $like_type: String!) {
  likeCommentPostShare(comment_id: $comment_id, like_type: $like_type) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeCommentPostShareGQL extends Apollo.Mutation<LikeCommentPostShareMutation, LikeCommentPostShareMutationVariables> {
    override document = LikeCommentPostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReplyCommentPostShareDocument = gql`
    mutation ReplyCommentPostShare($replyCommentPostInput: ReplyCommentPostShareInput!) {
  replyCommentPostShare(replyCommentPostInput: $replyCommentPostInput) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ReplyCommentPostShareGQL extends Apollo.Mutation<ReplyCommentPostShareMutation, ReplyCommentPostShareMutationVariables> {
    override document = ReplyCommentPostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeReplyCommentPostShareDocument = gql`
    mutation LikeReplyCommentPostShare($reply_comment_id: ID!, $like_type: String!) {
  likeReplyCommentPostShare(
    reply_comment_id: $reply_comment_id
    like_type: $like_type
  ) {
    ...mutationResponse
  }
}
    ${MutationResponseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeReplyCommentPostShareGQL extends Apollo.Mutation<LikeReplyCommentPostShareMutation, LikeReplyCommentPostShareMutationVariables> {
    override document = LikeReplyCommentPostShareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMyUserDocument = gql`
    query GetMyUser {
  getMyUser {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMyUserGQL extends Apollo.Query<GetMyUserQuery, GetMyUserQueryVariables> {
    override document = GetMyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }