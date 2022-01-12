import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAl7A7JrEWkKlRUki1kFoYgWXgMbxhGL7k',
	authDomain: 'simulation-42d1a.firebaseapp.com',
	databaseURL: 'https://simulation-42d1a-default-rtdb.firebaseio.com',
	projectId: 'simulation-42d1a',
	storageBucket: 'simulation-42d1a.appspot.com',
	messagingSenderId: '620855862097',
	appId: '1:620855862097:web:354d03591f87f849e66970',
};

const app = initializeApp(firebaseConfig);

export default app;
