import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

class App extends Component {
    render() {
        let auth = firebase.auth();
        auth.createUserWithEmailAndPassword("a@a.com", "1234567")
            .then((creds) => {
                var user = creds.user;
                console.log(user);
            })
            .catch((err) => {
                console.error(err);
            });
        console.log(auth);
        return <div className="App"></div>;
    }
}

export default App;
