import styled from "styled-components";

export const TicketContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
    height: 100%;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #total-price{
        
    }

    #individual-price{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30vh;
        height: 100%;
        margin: auto;
        font-weight: bold;
        color: #d83565;
        font-size: 30px;
    }
    
    p {
        color: black;
    }
    
    .ticket {
        margin: 5% auto 1% auto;
        display: flex;
        background: white;
        width: 50%;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .left {
        display: flex;
    }

    .image {
        height: 250px;
        width: 250px;
        background-image: url("https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg");
        background-size: contain;
        opacity: 0.85;
    }

    .admit-one {
        position: absolute;
        color: darkgray;
        height: 250px;
        padding: 0 10px;
        letter-spacing: 0.15em;
        display: flex;
        text-align: center;
        justify-content: space-around;
        writing-mode: vertical-rl;
        transform: rotate(-180deg);
    }

    .admit-one span:nth-child(2) {
        color: white;
        font-weight: 700;
    }

    .left .ticket-number {
        height: 250px;
        width: 250px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 5px;
    }

    .ticket-info {
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        align-items: center;
    }

    .date {
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 5px 0;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .date span {
        width: 20vh;
    }

    .date span:first-child {
        text-align: left;
    }

    .date span:last-child {
        text-align: right;
    }

    .date .june-29 {
        color: #d83565;
        font-size: 20px;
    }

    .show-name {
        font-size: 32px;
        font-family: "Nanum Pen Script", cursive;
        color: #d83565;
    }

    .show-name h1 {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #4a437e;
    }

    .time {
        padding: 10px 0;
        color: #4a437e;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 700;
    }

    .time span {
        font-weight: 400;
        color: gray;
    }

    .left .time {
        font-size: 16px;
    }


    .location {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding-top: 8px;
        border-top: 1px solid gray;
    }

    .location .separator {
        font-size: 20px;
    }

    .right {
        width: 180px;
        border-left: 1px dashed #404040;
    }

    .right .admit-one {
        color: darkgray;
    }

    .right .admit-one span:nth-child(2) {
        color: gray;
    }

    .right .right-info-container {
        height: 250px;
        padding: 10px 15px 10px 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:200px
    }
    
    .right .show-name h1 {
        margin: 0px 0px 30px 0px;
        font-size: 18px;
    }

    .barcode {
        height: 100px;
    }

    .barcode img {
        height: 100%;
    }

    .right .ticket-number {
        text-align:center;
        margin: 0px 0px 30px 0px;
        color: gray;
    }
    
  
`