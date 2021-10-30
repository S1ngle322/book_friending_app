import BookModel from '../models/books'
import modelUser from '../models/user'
import requireDir from 'require-dir'
import mongooseLoader from '../loaders/mongooseLoader'

const initJson = requireDir("../../data/init");

const loadUsers = async (): Promise<void> => {
  await new modelUser(initJson.users).save()
}

const loadBooks = async (): Promise<void> => {
  await new BookModel(initJson.books).save()
}


const initData = async (): Promise<void> => {
  await loadUsers();
  await loadBooks();
  console.log("Finished loading init data");
};

const loadInitData = async (): Promise<void> => {
  await mongooseLoader()
  console.log('MongoDb loaded')
  console.log('Start loading init data')
  await initData()

}

loadInitData();
