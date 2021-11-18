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
        return (
            <div className="App">
                    <body>
                        <div id="page"></div>
                        <header>
                            PlanTracker
                        </header>
                    </body>
                    <footer>
                        <br>(C) Jonathan C, Andrew Y, Karankumar M, and Andrew C for Coders SB</br>
                        Based on an <a href="https://dribbble.com/shots/2502485-Download-lll" target="_blank">Oleg Frolov</a> creation
                    </footer>
            </div>

        )
    }
}

export default App;
