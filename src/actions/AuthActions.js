import firebase from '../FirebaseConnection';

export const SignOut = () => {
	firebase.auth().signOut();

	return {
		type:'changeStatus',
		payload:{
			status:2
		}
	};
};

export const checkLogin = () => {

	return (dispatch) => {


		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				dispatch({
					type:'changeUid',
					payload:{
						uid:user.uid
					}
				});
			} else {
				// Usuario nao logado
				dispatch({
					type:'changeStatus',
					payload:{
						status:2
						}
					});			
				}
		});

	}

};

export const signInAction = (email, password, callback) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {

				let uid = firebase.auth().currentUser.uid;

				callback();


				dispatch({
					type:'changeUid',
					payload:{
						uid:uid
					}
				});

			})
			.catch((error) => {
				switch(error.code) {
					case 'auth/invalid-email':
						alert('Email invalido');
						break;
					case 'auth/user-disabled':
						alert('Seu usuario está desativado');
						break;
					case 'auth/user-not-found':
						alert("Não existe este usuario");
						break;
					case 'auth/wrong-password':
						alert("E-mail e/ou senha errados!");
						break;
				}
				callback();
			});
	};
};

export const signUpAction = (name, email, password, callback) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {

				let uid = firebase.auth().currentUser.uid;

				callback();

				firebase.database().ref('users').child(uid).set({
					name:name
				});

				dispatch({
					type:'changeUid',
					payload:{
						uid:uid
					}
				});

			})
			.catch((error)=>{
				switch(error.code) {
					case 'auth/email-already-in-use':
						alert("Email já ultilizado!");
						break;
					case 'auth/invalid-email':
						alert("E-mail invalido");
						break;
					case 'auth/operation-not-allowed':
						alert("Tente novamente mais tarde");
					case 'auth/weak-password':
						alert("Digite uma senha melhor");
						break;
				}	
				callback();
			});
	};
};

export const changeEmail = (email) => {
	return {
		type:'changeEmail',
		payload:{
			email:email
		}
	};
};

export const changePassword = (password) => {
	return {
		type:'changePassword',
		payload:{
			password:password
		}
	};
};

export const changeName = (name) => {
	return {
		type:'changeName',
		payload:{
			name:name
		}
	};
};