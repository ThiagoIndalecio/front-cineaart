"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./routers/Home"));
var Movie_1 = __importDefault(require("./routers/Movie"));
var App_js_1 = __importDefault(require("./App.js"));
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: react_1.default.createElement(App_js_1.default, null),
        children: [
            {
                path: "/",
                element: react_1.default.createElement(Home_1.default, null)
            },
            {
                path: "/movie",
                element: react_1.default.createElement(Movie_1.default, null)
            }
        ]
    },
]);
client_1.default.createRoot(document.getElementById('root')).render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router })));
