import React, {useState} from 'react';
import './App.css';
import Home from "./Pages/Home";
import BlogId from "./Pages/BlogId";
import Blogposts from "./Pages/Blogposts";
import LoginPage from "./Pages/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink} from "react-router-dom";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassname="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" exact activeClassname="active">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts" exact activeClassname="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login:id" exact activeClassname="active">Personal</NavLink>
                    </li>
                </ul>
            </nav>


            <Switch>
                <Route exact path="/home/">
                    <Home />
                </Route>
                <Route path="/blogposts:id">
                    <BlogId />
                </Route>
                <Route path="/blogposts/">
                    <Blogposts />
                </Route>
                <Route path="/login/">
                    <LoginPage />
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
