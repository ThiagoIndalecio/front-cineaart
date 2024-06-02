import styled from "styled-components";

export const ModalContainer = styled.div`
    margin-left: 25%;
    margin-right: auto;
    margin-top: 5%;
    position: fixed;
    background-color: #0F1848;
    color: white;
    border: 5px #0056b3 solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SessionInfoContainer = styled.div`
    margin: 5%;
    width: 50%;
    font-weight: bold;
    color: #90FF9F;
    
    span {
        display: block;
        margin-bottom: 40px;
    }
    
    #title {
        color: white;
        font-size: 22px;
        font-weight: bold;
    }
`

export const SeatsContainer = styled.div`
    margin-top: 5%;
    width: 100%;
    
    span {
        margin-left: 14vh;
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
    }

    .showcase .seat:not(.occupied) {
        cursor: default;
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
    
    button {
        color: #0F1848;
        width: 70%;
        margin-left: 17%;
        margin-top: 5%;
        padding: 10px;
        background-color: #90FF9F;
    }
`

export const RowNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3.5vh;
    font-size: 20px;
    font-weight: bold;
    div {
        margin: 2.8%;
    }
`

export const Image = styled.img`
    margin-right: 2vh;
    border-radius: 10px;
    background-color: #464646;
    width: 10vh;
    height: 10vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;