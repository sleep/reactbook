import React from "react";
import "./style.scss"

import {Router, Route, Link} from "react-router";
import createHistory from "history/lib/createHashHistory";


import Book from "./lib/Book.js";
import entries from "dir!./entries.config.js";
import components from "dir!./components.config.js";

let book = new Book(entries, components);
let routes = [
    book.getRoutes()
];
console.log(routes);


React.render((
    <Router history={createHistory({queryKey: false})}
            routes={routes}/>
), document.getElementById("app"));