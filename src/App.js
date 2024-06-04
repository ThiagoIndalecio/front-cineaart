"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var header_1 = __importDefault(require("./components/header"));
var category_1 = __importDefault(require("./components/category"));
var react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "app" },
            react_1.default.createElement(header_1.default, null),
            react_1.default.createElement(category_1.default, null),
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
}
exports.default = App;
