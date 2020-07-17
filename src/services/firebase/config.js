import * as firebase from "firebase";


const config = () =>{
    const firebaseConfig = {
        apiKey: "AIzaSyDzEYJzgQ7G09DQbKHLdCxnklJPuI_smXs",
        authDomain: "todo-7a6f8.firebaseapp.com",
        databaseURL: "https://todo-7a6f8.firebaseio.com",
        projectId: "todo-7a6f8",
        storageBucket: "todo-7a6f8.appspot.com",
        messagingSenderId: "851526426917",
        appId: "1:851526426917:web:2d26f219e29edd972bfacc"
    };

    firebase.initializeApp(firebaseConfig);
}

export default config