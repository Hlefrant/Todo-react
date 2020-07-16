import React, {Component} from "react";
import Todo from "../todo/todo";

import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import "./list.scss"

interface IProps {
}

interface IState {
    todos: string[]
    count: number;
    state: boolean
}

const firebaseConfig = {
    apiKey: "AIzaSyDzEYJzgQ7G09DQbKHLdCxnklJPuI_smXs",
    authDomain: "todo-7a6f8.firebaseapp.com",
    databaseURL: "https://todo-7a6f8.firebaseio.com",
    projectId: "todo-7a6f8",
    storageBucket: "todo-7a6f8.appspot.com",
    messagingSenderId: "851526426917",
    appId: "1:851526426917:web:2d26f219e29edd972bfacc"
};


;


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class List extends Component<IProps, IState>{
    public state: IState = {
        todos : [],
        count : 0,
        state: false
    }

   async componentDidMount() {

        firebase.firestore().collection("todos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.get("value")}`);


                this.state.todos.push(doc.get("value"))
                this.setState({
                    state: true
                })
            });
        });
    }

    public render() {

        const {todos, state}  = this.state

        if (state){
            return (
                <div className="List">
                    {todos.map((todo, i) => {
                        return (
                            <Todo key={i} value={todo} />
                        )
                    })}
                </div>
            )
        }
        else{
            return (
                <div>load</div>
            )
        }

    }
}

export default List