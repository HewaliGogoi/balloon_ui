import React, { createContext, useEffect, useState } from 'react';

export const BalloonContext = createContext();

const BalloonContextProvider = ({children}) => {

    const [balloonList, setBalloonList] = useState([]);
    const [balloon, setBalloon] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        let arr = [];
        for(let i = 1; i <= 5; i++){
            let r = Math.floor(Math.random() * (255-i-10));
            let g = Math.floor(Math.random() * (255-i-25));
            let b = Math.floor(Math.random() * (255-i-40));
            let color = `rgba(${r}, ${g}, ${b}, .7)`;
            let bor_col = `rgb(${r}, ${g}, ${b})`;
            // console.log(bor_col)
            let data = {
                org_pos : i,
                cur_pos : i,
                mycolor : color,
                my_bor_col : bor_col
            }
            arr.push(data);
        }
        setBalloonList([...arr]);
        // console.log(arr)
    }, []);
    // console.log("hi", balloonList)

    const handleChange = (e) => {
        setNum(e.target.value);
        // console.log(num);
    }

    const moveLeft = () => {
        for(let i = 0; i < balloonList.length; i++){
            let cur_balloon = balloonList[i]
            if(num == cur_balloon.cur_pos){
                cur_balloon.cur_pos = 0;
                setBalloon([...balloon, cur_balloon]);
            }
        }
        updateBalloonList();
    }
    
    const updateBalloonList = () => {
        let arr = balloonList.filter((item) => item.cur_pos > 0);
        arr.sort((a, b) => a.org_pos - b.org_pos);
        arr.map((item, id) => item.cur_pos = id + 1);
        setBalloonList([...arr]);
    }

    const moveRight = (item) => {
        setBalloon([...balloon.filter((e) => e.org_pos != item.org_pos)]);
        console.log(balloon);
        let arr = [...balloonList, item];
        arr.sort((a, b) => a.org_pos - b.org_pos);
        arr.map((item, id) => item.cur_pos = id + 1);
        setBalloonList([...arr]);
    }

  return (
    <BalloonContext.Provider value={{ balloonList, balloon, handleChange, moveRight, moveLeft }}>{children}</BalloonContext.Provider>
  )
}

export default BalloonContextProvider;