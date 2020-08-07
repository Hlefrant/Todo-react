import React, {Component} from "react";
import * as firebase from "firebase";
import "./add.scss"
import getCurrentDay from "../../../../services/utils/getCurrentDay";
interface IProps {
}

interface IState {
    value: string
}
class Add extends Component<IProps, IState>{

   public state: IState ={
        value: ""
    }

    handleChange = (event: any) =>{
        this.setState({value: event.target.value})
    }

    submit = () =>{
        firebase.firestore().collection("todos").add({
            value: this.state.value,
            date: getCurrentDay()
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }


   public render() {
        return(
            <div className="Add">
                <input value={this.state.value} onChange={this.handleChange} type="text"/>
                <button onClick={this.submit}>+</button>
            </div>
        )
    }
}

export default Add