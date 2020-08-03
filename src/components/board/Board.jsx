import React from 'react';
import styles from './Board.module.css';
import Box from './../box/Box';

let arr = [1,2,3,4,5,6,7,8,9,10];

const Board = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <h1> Snake And Ladder Board UI</h1>
            </div>
            
            <div className={styles.inner}>
                
                {arr.map((each,index) => <Box value = {-index+100}/>)}
                {arr.map((each,index) => <Box value = {index+81}/>)}
                {arr.map((each,index) => <Box value = {-index+80}/>)}
                {arr.map((each,index) => <Box value = {index+61}/>)}
                {arr.map((each,index) => <Box value = {-index+60}/>)}
                {arr.map((each,index) => <Box value = {index+41}/>)}
                {arr.map((each,index) => <Box value = {-index+40}/>)}
                {arr.map((each,index) => <Box value = {index+21}/>)}
                {arr.map((each,index) => <Box value = {-index+20}/>)}
                {arr.map((each,index) => <Box value = {index+1}/>)}
            </div>
        </div>
     );
}
 
export default Board;