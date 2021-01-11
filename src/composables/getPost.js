import {ref} from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
	const post = ref(null)
	const error = ref(null)

	const load = async () => {
		try{
			// let data = await fetch('http://localhost:3000/posts/'+id)
			// console.log(data)
			// if(!data.ok){
			// 	throw Error('that post does not exist!');
			// }
			// post.value = await data.json();
			const res = await projectFirestore.collection('posts').doc(id).get();
			if(!res.exists){
				throw Error('That post does not exist..');
			}
			post.value = {...res.data(), id: res.id}
		}catch(err) {
			error.value = err.message
			console.log(err.value)
		}
	}

	return {
		post, error, load
	}
}

export default getPost;