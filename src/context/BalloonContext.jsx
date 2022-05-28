import React, { createContext, useEffect, useState } from 'react';

export const BalloonContext = createContext();

const BalloonContextProvider = ({children}) => {

    const [balloonList, setBalloonList] = useState([]);
    const [balloon, setBalloon] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        let arr = [];
        for(let i = 1; i <= 5; i++){
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgb(${r}, ${g}, ${b})`;
            let data = {
                org_pos : i,
                cur_pos : i,
                mycolor : color
            }
            arr.push(data);
        }
        setBalloonList([...arr]);
        // console.log(arr)
        console.log(balloonList)
    }, []);

    const handleChange = (e) => {
        setNum(e.target.value);
        // console.log(num);
    }

    const moveRight = () => {
        for(let i = 0; i < balloonList.length; i++){
            if(num == balloonList[i].cur_pos){
                var cur_balloon = balloonList[i]
                cur_balloon.cur_pos = 0;
                setBalloon([...balloon, cur_balloon]);
            }
        }
        updateBalloonList(cur_balloon);
        // console.log(balloon)
    }

    const updateBalloonList = (cur_balloon) => {
        let arr = balloonList.filter((item) => item.cur_pos > 0);
        arr.sort((a, b) => a.org_pos - b.org_pos);
        arr.map((item, id) => item.cur_pos = id + 1);
        // console.log(arr)
        setBalloonList([...arr]);
    }

    const moveLeft = () => {

    }

  return (
    <BalloonContext.Provider value={{ balloonList, setBalloonList, balloon, setBalloon, handleChange, moveRight, moveLeft }}>{children}</BalloonContext.Provider>
  )
}

export default BalloonContextProvider;