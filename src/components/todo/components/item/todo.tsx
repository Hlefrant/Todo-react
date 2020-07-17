import React, {Component} from "react";
import "./todo.scss"
import * as firebase from 'firebase/app';


interface IProps {
    id: string
    value: string
}

interface IState {

}

class Todo extends Component<IProps, IState>{

    handleChange = (event: any) =>{
        if (event.target.checked){
            firebase.firestore().collection("todos").doc(this.props.id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        }
    }

    render() {
        return(
            <div className="todo">
                <p>{this.props.value}</p>
                <input onChange={this.handleChange} type="checkbox" id="check" name="check"/>
            </div>
        )
    }

}

export default Todo