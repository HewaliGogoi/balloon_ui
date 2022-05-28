import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    border : 1px solid black;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;

    div:first-child{
        border : 1px solid black;
        width : 30%;
        height : 400px;
        align-self : center;
    }
    
    // div:nth-child(2){
    //     position : relative;
    // }
`

const CircleWrapper = styled.div`
    border : 1px solid black;
    height:90px;
    width:90px;
    border-radius : 500%;
    margin-bottom :20%;
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

    const [circle, setCircle] = useState([]);

    useEffect(() => {
        let arr = [];
        for(let i = 1; i <= 5; i++){
            arr.push(i);
        }
        setCircle([...arr]);
        console.log(arr)
    },[])

  return (
    <BodyWrapper>
        <div></div>
        <div>
            <h1>Circles</h1>
            {
                circle.map((item, id) => <CircleWrapper key={id}>{item}</CircleWrapper>)
            }
        </div>
        <InputWrapper>
            <input type="number" placeholder="Enter the number..." />
            <button>SHOOT</button>
        </InputWrapper>
    </BodyWrapper>
  )
}

export default Circles;