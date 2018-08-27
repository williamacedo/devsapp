import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyArjX1JcVr-LguuoPKSb_nK0NZ5KzU1TPE",
    authDomain: "devsapp-468d8.firebaseapp.com",
    databaseURL: "https://devsapp-468d8.firebaseio.com",
    projectId: "devsapp-468d8",
    storageBucket: "devsapp-468d8.appspot.com",
    messagingSenderId: "980060937479"
  };
  
  firebase.initializeApp(config);

  export default firebase;