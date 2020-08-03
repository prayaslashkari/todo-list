import React from 'react';
import styles from './Box.module.css'

const Box = ({value}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div>{value}</div>
            </div>
        </div>
     );
}
 
export default Box;