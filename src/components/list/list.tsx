import React, {Component} from "react";
import Todo from "../todo/components/item/todo";
import TodoModel from "../../Models/Todo";
import * as firebase from 'firebase/app';
import config from "../../services/firebase/config";
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import "./list.scss"
import Loader from "../loader/loader";

interface IProps {
}

interface IState {
    todos: TodoModel[]
    count: number;
    state: boolean
}

config()

class List extends Component<IProps, IState> {
    public state: IState = {
        todos: [],
        count: 0,
        state: false
    }

    async componentDidMount() {
        firebase.firestore().collection("todos").onSnapshot((querySnapshot) => {
            this.setState({todos: []})
            querySnapshot.forEach((doc) => {
                this.state.todos.push(new TodoModel(doc.get("value"), doc.id, doc.get("date")))
                this.setState({
                    state: true
                })
            })
        })
    }

    public render() {

        const {todos, state} = this.state

        if (state) {
            return (
                <div className="List">
                    {todos.map((todo, i) => {
                        return (
                            <Todo key={i} id={todo.id} value={todo.value} date={todo.date}/>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <Loader/>
            )
        }
    }
}

export default List