import React, {useState,useEffect} from 'react';
import styles from './App.module.css';
import {List,Board} from './components/index';

function App() {

  const [input,setInput] = useState("")

  const [todo, setTodo] = useState(
    [
      { "key" : 1,
        "description":" Make Coffee"},
      { "key" : 2,
        "description": "I am perfectly Noob"},
      { "key" : 3,
        "description":" Hi Ritesh, Here is the Assignment"}
    ])

  let add = () => {
    setTodo([{"key" : todo.length+1, "description" : "content"}, ...todo])
  };

  let deleteM = (value) => {
    let temp = todo.filter(item => item.key !== value)
    setTodo(temp)
    console.log(value)  
  };

  const [todoB, setTodoB] = useState([])

  let moveToB = (key,content) => {
    let obj = {"key" : todoB.length+1, "description" : content}
    setTodoB([obj, ...todoB])
    console.log(todoB)
  }

  let moveAllB = () => {
    setTodoB(todo);
    console.log(todoB)
  }
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodo([{"key" : todo.length+1, "description" : input}, ...todo])
}


  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <Board/>
      </div>

      <div className={styles.bottom}>
      
          <List 
            handleDel={deleteM}  
            handleAdd={()=> add()} 
            handleMove={moveToB}
            array={todo} 
            name={"A"} 
            disable={false}/>
            
            <form onSubmit={handleSubmit}>
              <label>
                Add your own text
                <input onChange={e => setInput(e.target.value)} type="text" name="name" />
              </label>
              <input  type="submit" value="Submit" />
            </form>

          <div>
              <button className={styles.moveAll} onClick={()=>moveAllB()}>Move All to B</button>
              {/* <button className={styles.moveTo} onClick={()=>moveToB(9,"my name is khan")}>Move to B</button> */}
          </div>

          <List 
            name={"B"} 
            disable={true}
            array={todoB}/>

            
          {/* <button onClick={() => add ()}>Add</button>
          <button onClick={() => deleteM(1)}>Delete</button> */}
      </div>
    </div>
  );
}

export default App;
