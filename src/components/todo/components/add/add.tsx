import React, {Component} from "react";
import * as firebase from "firebase";

import config from "../../../../services/firebase/config";
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
            value: this.state.value
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
            <div>
                <input value={this.state.value} onChange={this.handleChange} type="text"/>
                <button onClick={this.submit}>Ajouter</button>
            </div>
        )
    }
}

export default Add