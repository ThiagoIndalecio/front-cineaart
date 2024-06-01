import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 50%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 5%;
`

export const SessionInfoContainer = styled.div`
    background-color: #ffa879;
    margin-top: 5%;
    width: 40%;
`

export const SeatsContainer = styled.div`
    margin-top: 5%;
    width: 100%;
    select {
        background-color: #fff;
        border: 0;
        border-radius: 5px;
        font-size: 14px;
        margin-left: 10px;
        padding: 5px 15px 5px 15px;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }

    .seat {
        background-color: #90FF9F;
        height: 12px;
        width: 15px;
        margin: 3px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .seat.selected {
        background-color: red;
    }

    .seat.occupied {
        background-color: grey;
    }

    .seat:not(.occupied) {
        cursor: pointer;
        transform: scale(1.2);
    }

    .showcase .seat:not(.occupied) {
        cursor: default;
        transform: scale(1);
    }
    
    .container {
        perspective: 1000px;
        margin-bottom: 3px;
    }

    
    .showcase {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 5px;
        color: #777;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }

    .showcase li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
    }

    .showcase li small {
        margin-left: 2px;
    }

    .row {
        display: flex;
        justify-content: center;
    }
    
    p.text {
        margin: 5px 0;
    }

    p.text span {
        color: #6feaf6;
    }
`

export const RowNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 14px;
    div {
        margin: 6px;
    }
`