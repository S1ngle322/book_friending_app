import { BaseModel } from './BaseModel'
import * as mongoose from 'mongoose'
import { Books } from './books'

export class User extends BaseModel {
  userID: string;
  favoriteBooksIds: Books['bookId'];
  matchedUsers: User['userID'];
  age: number;
  gender: string;
  name: string;
  city: string;
}

export const user = new mongoose.Schema({
  userID: { type: String, unique: true, required: true },
  favoriteBooksIds: { type: Array, default: '', immutable: false },
  matchedUsers: { type: Array, default: '', immutable: false },
  age: { type: Number, default: 0 },
  gender: { type: String },
  name: { type: String },
  city: { type: String },
})

const modelUser = mongoose.model<User & mongoose.Document>('User', user);
export default modelUser;

