import React, {Component} from "react";
import Todo from "../todo/todo";
import "./list.scss"

interface IProps {
}

interface IState {
    todos: string[]
    count: number;
}

class List extends Component<IProps, IState>{
    public state: IState = {
        todos : ["Vaisselle", "Lessive","Cuisine", "Course"],
        count : 0
    }

    public render() {

        const {todos}  = this.state
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
}

export default List