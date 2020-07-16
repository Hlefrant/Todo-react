import React, {Component} from "react";
import "./todo.scss"


interface IProps {
    value: string
}

interface IState {

}

class Todo extends Component<IProps, IState>{

    render() {
        return(
            <div className="todo">
                <p>{this.props.value}</p>
            </div>
        )
    }

}

export default Todo