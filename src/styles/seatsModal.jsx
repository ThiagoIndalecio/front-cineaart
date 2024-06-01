import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 50%;
    height: 60vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 5%;
`

export const SessionInfoContainer = styled.div`
    margin-top: 5%;
    width: 40%;
    span {
        display: block;
        margin-bottom: 40px;
    }
    
    #title {
        font-size: 22px;
        font-weight: bold;
    }
`

export const SeatsContainer = styled.div`
    margin-top: 5%;
    width: 100%;
    
    span {
        margin-bottom: 45px;
        display: flex;
        font-size: 22px;
        font-weight: bold;
    }
    
    
    
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
        height: 30px;
        width: 30px;
        margin: 3px;
        border-radius: 5px;
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
    font-size: 20px;
    font-weight: bold;
    div {
        margin: 13px;
    }
`