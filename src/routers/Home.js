"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../styles/home.css");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    return (react_1.default.createElement("div", { className: "home-container" },
        react_1.default.createElement("div", { className: "box" },
            react_1.default.createElement("div", { className: "cards" },
                react_1.default.createElement("div", { className: "top-left" },
                    react_1.default.createElement("div", { className: "footer-card" },
                        react_1.default.createElement("h4", null, "Lazer"))),
                react_1.default.createElement("div", { className: "top-right" },
                    react_1.default.createElement("div", { className: "footer-card" },
                        react_1.default.createElement("h4", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/movie" }, "Cinema")))),
                react_1.default.createElement("div", { className: "bot-left" },
                    react_1.default.createElement("div", { className: "footer-card" },
                        react_1.default.createElement("h4", null, "Lojas"))),
                react_1.default.createElement("div", { className: "bot-middle" },
                    react_1.default.createElement("div", { className: "footer-card" },
                        react_1.default.createElement("h4", null, "Alimenta\u00E7\u00E3o"))),
                react_1.default.createElement("div", { className: "bot-right" },
                    react_1.default.createElement("div", { className: "footer-card" },
                        react_1.default.createElement("h4", null, "Servi\u00E7os")))))));
};
exports.default = Home;
