import { addCategory } from '../Store/categorySlice/categorySlice';
import { Submit } from './function';
import { useDispatch } from 'react-redux';
import { store } from '../Store/Store';
import { addUser } from '../Store/userSlice/userSlice';
import { addProduct } from '../Store/productSlice/productSlice';
import { addCart } from '../Store/cartSlice/cartslice';

export const getCategory = async () => {
	try {
		const res = await Submit({}, '/category/', 'get');

		//const dispatch = useDispatch();
		store.dispatch(addCategory(res.data.result));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getUserDetails = async () => {
	try {
		const res = await Submit({}, '/user/getuser', 'get');

		//const dispatch = useDispatch();
		if (res) store.dispatch(addUser(res.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getProduct = async () => {
	try {
		const res = await Submit({}, '/product/', 'get');

		//const dispatch = useDispatch();
		store.dispatch(addProduct(res.data.result));
	} catch (err) {
		console.log(err);
		return err;
	}
};

// export const addToCart = async () => {
// 	try {
// 		const res = await Submit({}, '/cart/', 'post');

// 		//const dispatch = useDispatch();
// 		store.dispatch(addProduct(res.data.result));
// 	} catch (err) {
// 		console.log(err);
// 		return err;
// 	}
// };
export const getCart = async () => {
	try {
		const res = await Submit({}, '/cart/', 'get');

		//const dispatch = useDispatch();
		store.dispatch(addCart(res.data.result));
	} catch (err) {
		console.log(err);
		return err;
	}
};
