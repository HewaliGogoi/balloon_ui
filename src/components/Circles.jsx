import React, { useContext } from 'react';
import styled from 'styled-components';
import { BalloonContext } from '../context/BalloonContext';

const BodyWrapper = styled.div`
    // border : 1px solid black;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;
`

const BoxWrapper = styled.div`
    // border : 1px solid black;
    width : 30%;

    >div{
        border-top : 2px solid black;
        display : grid;
        grid-template-columns : auto auto;
        justify-content : space-around;
        // align-items : center;
    }
`;

const CircleWrapper = styled.div`
    border : 3px solid ${(props) => props.my_bor_col}; 
    // border : 3px solid rgb(16, 13,13); 
    outline : none;
    height:90px;
    width:90px;
    border-radius : 500%;
    justify-content : center;
    align-items : center;
    margin :20% 0%;
    background-color : ${(props) => props.mycolor};
    // opacity : .5;
`

const InputWrapper = styled.div`
    // border : 1px solid blue;
    display: flex;
    flex-direction : column;
    height : 200px;
    width : 15%;

    input{
        height : 30px;
        margin-bottom : 20%;
        border : none;
        border-bottom : 1px solid black;
        padding : 5%;
    }

    button{
        border : 3px outset #1FCFEA;
        margin : auto;
        width : 50%;
        padding : 5%;
        background-color : white;
        border-radius : 5%;
    }

    button:hover{
        border : hidden;
        background-color : #1FCFEA;
        margin : auto;
        width : 50%;
        padding : 5%;
        cursor : pointer;
        // font-size : 16px;
        font-weight : bold;
        color : white;
    }
`;

const Circles = () => {

    const { balloon, balloonList, handleChange, moveRight, moveLeft, num } = useContext(BalloonContext);

  return (
    <BodyWrapper>
        <BoxWrapper>
            <h1>Collections</h1>
            <div>
                {
                    balloon.map((item, id) => {
                        return (
                            <CircleWrapper style={{cursor:"pointer"}} key={id} mycolor={item.mycolor} my_bor_col={item.my_bor_col} onClick={() => moveRight(item)}></CircleWrapper>
                            // console.log(item)
                        )
                    })
                }
            </div>
        </BoxWrapper>
        <div>
            <h1>Circles</h1>
            {
                balloonList.map((item, id) => {
                    return ( 
                        <CircleWrapper key={id} mycolor={item.mycolor} my_bor_col={item.my_bor_col}></CircleWrapper>
                    )
                })
            }
        </div>
        <InputWrapper>
            <h1>Input</h1>
            <input type="number" placeholder="Enter the number..." value={num} onChange={handleChange}/>
            <button onClick={moveLeft}>SHOOT</button>
        </InputWrapper>
    </BodyWrapper>
  )
}

export default Circles;