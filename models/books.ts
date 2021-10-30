import * as mongoose from 'mongoose'

export class Books {
  bookId: string;
  book_title: string;
  author: string;
  genres: string[];
  book_vector: number[];
  description: string;
}

export const book = new mongoose.Schema({
  bookId: { type: String, unique: true, required: true },
  book_title: { type: String, default: '' },
  author: { type: String, default: '' },
  genres: { type: Array, default: 0 },
  book_vector: { type: Array },
  description: { type: String },
  // type: { type: String }
})

const BookModel = mongoose.model<Books & mongoose.Document>('Books', book);
export default BookModel;
