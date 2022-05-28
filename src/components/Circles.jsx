import React, { useContext } from 'react';
import styled from 'styled-components';
import { BalloonContext } from '../context/BalloonContext';

const BodyWrapper = styled.div`
    border : 1px solid black;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;
`

const BoxWrapper = styled.div`
    border : 1px solid black;
    width : 30%;
    height : 400px;
    align-self : center;
`;

const CircleWrapper = styled.div`
    border : 2px solid ${(props) => props.mycolor};
    height:90px;
    width:90px;
    border-radius : 500%;
    margin-bottom :20%;
    background-color : ${(props) => props.mycolor};
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
            {
                balloon.map((item, id) => {
                    return (
                        <CircleWrapper key={id} mycolor={item.mycolor} onClick={moveLeft}>{item.org_pos}</CircleWrapper>
                        // console.log(item)
                    )
                })
            }
        </BoxWrapper>
        <div>
            <h1>Circles</h1>
            {
                balloonList.map((item, id) => {
                    return ( 
                        <CircleWrapper key={id} mycolor={item.mycolor}>{item.org_pos}</CircleWrapper>
                    )
                })
            }
        </div>
        <InputWrapper>
            <input type="number" placeholder="Enter the number..." onChange={handleChange}/>
            <button onClick={moveRight}>SHOOT</button>
        </InputWrapper>
    </BodyWrapper>
  )
}

export default Circles;