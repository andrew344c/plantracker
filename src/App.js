import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
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
                        <Button>
                            <div className="material_button">
                                onClick = {this.handleClick}
                            </div>
                            <i ref="done_icon" className="material-icons done" />
                            <div ref="progress" className="progress">
                                {this.state.progress}
                            </div>
                            <i ref="arrow_icon" className="material-icons" />
                            <Ripple>
                                {activity = this.state.action, Event = this.state.event, point = this.state.point}
                            </Ripple>
                            <svg> 
                                { height = "1", width = "1" }
                            </svg>
                            <circle> 
                                { ref = "greenripple", id = "green_ripple", cx = "0", cy = "0", r = "256" }
                            </circle>
                            <circle> { ref = "ripple", id = "white_ripple", cx = "0", cy = "0", r = "256" }
                            </circle>
                        </Button>
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

