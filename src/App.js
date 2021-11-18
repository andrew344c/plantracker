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
                <head>
                <meta charset="UTF-8"></meta>
                    <title>PlanTracker</title>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/><link rel="stylesheet" href="./style.css"> </link>

                </head>
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

                    <script src='https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js'></script>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min.js'></script>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js'></script>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js'></script><script src="./script.js"></script>
                    <script type="module">
                        import {initializeApp} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
                        import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
                        // TODO: Add SDKs for Firebase products that you want to use
                        // https://firebase.google.com/docs/web/setup#available-libraries

                        // Your web app's Firebase configuration
                        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                        const firebaseConfig = {
                            piKey = "AIzaSyARlX6C6mt6825j0nruOGCQC-JcHKWjKq4",
                            authDomain = "plantracker-ucsb.firebaseapp.com",
                            projectId = "plantracker-ucsb",
                            storageBucket = "plantracker-ucsb.appspot.com",
                            messagingSenderId = "86019379890",
                            appId = "1:86019379890:web:36bfe4e1e2d0ff0979efab",
                            measurementId = "G-CCRZ82FVVL"
                        }

                        // Initialize Firebase
                        const app = initializeApp(firebaseConfig);
                        const analytics = getAnalytics(app);
                    </script>
            </div>

        )
        
        

    }
}

export default App;
