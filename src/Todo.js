import React, { useState } from 'react';

const Todo = (props) => {
    const [isupdate,setIsUpdate] = useState(false)
    const { List,setList,update,setUpdate,editMode,listRemove,listRemoveAll } = props
    //console.log(update)
    const change=(index) =>{
        const newTodos = [...List]
        newTodos[index].name = update.value
        setList(newTodos)
        setIsUpdate(false)
    }
    console.log(List)
    return(
        <ul>
            {List.map((item, index) =>
                    <li key={index} >
         { !isupdate ? <div><p>{item.name}</p>
         <button onClick={()=>setIsUpdate(true)}>Edit</button>
         </div>:
         
                       <div> <input type="text" value={((update.index===index)&&(update.value))||""}  style={editMode} onChange={e => {
    setUpdate({index,value:e.target.value})
  }}/>
  <button onClick={()=>change(index)}>Update</button></div>}

                        <p>{item.date}</p>
                        {/* <div onDoubleClick={() => handleEditing()}></div> */}
                         
                        
                        {/* <button onClick={() => editItem(item.name)}>Update</button> */}
                        <button onClick={() => listRemove(index)}>Delete</button>
                    </li>
                )}
            {List.length > 1 && <p><button  onClick={() => listRemoveAll()}>Delete all</button></p>}
        </ul>
    )
}
export default Todo;



