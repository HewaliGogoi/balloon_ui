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

    div{
        border : 1px solid black;
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
    padding : 2%;
    display: flex;
    flex-direction : column;
    height : 200px;
    position : relative;
    top : 100px;
`;

const Circles = () => {

    const { balloon, balloonList, handleChange, moveRight, moveLeft } = useContext(BalloonContext);

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
            <input type="number" placeholder="Enter the number..." onChange={handleChange}/>
            <button onClick={moveLeft}>SHOOT</button>
        </InputWrapper>
    </BodyWrapper>
  )
}

export default Circles;