import React, {useEffect} from 'react';
import Item from './../item/Item';
import styles from './List.module.css';



const List = ({name,array,disable,handleAdd,handleDel,handleMove}) => {

    useEffect(()=>{
        console.log(array)
    })

    return ( 
        <div className={styles.container}>
            <div><h1>List {name}</h1></div>
            <div className={styles.inner}>
                {/* <button onClick={()=>handleAdd()}> DELETE</button>
                <button onClick={()=>handleDel(1)}> DELETE</button> */}


                {array.map((each) => 
                    <div className={styles.itemMain}>
                        <Item 
                            handleMove={handleMove}
                            handleDel={handleDel} 
                            key={each.key} 
                            index={each.key}
                            description={each.description} 
                            disable={disable}/>
                    </div>
                    )}
            </div>
        </div>
     );
}
 
export default List;