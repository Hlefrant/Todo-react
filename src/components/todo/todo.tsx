import React, {Component} from "react";

interface IProps {
    value: string
}

interface IState {

}

class Todo extends Component<IProps, IState>{

    render() {
        return(
            <div>
                <p>{this.props.value}</p>
            </div>
        )
    }

}

export default Todo