import React from 'react';
import styles from './Item.module.css'

const Item = ({handleDel, handleMove, index, description, disable}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div><h1>{description}</h1></div>
                
                { !disable ? 
                    <React.Fragment>
                        <div><img 
                            onClick={()=>handleDel(index)} 
                            src="https://img.icons8.com/flat_round/28/000000/delete-sign.png"
                            title="Delete this Item"/></div>
                        {/* <button onClick={()=>handleDel(index)}>Delete</button>
                        <button onClick={()=>handleMove(index,description)}> Move to B</button> */}
                        <div><img 
                            onClick={()=>handleMove(index,description)} 
                            src="https://img.icons8.com/color/28/000000/move-stock.png"
                            title="Move to B"/></div>
                    </React.Fragment> : ""
                }
            </div>
        </div>
     );
}
 
export default Item;