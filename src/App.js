import { useState } from 'react';
import Todo from './Todo';
import Form from './Form';
import './App.css';

function App() {
  const [List, setList] = useState([])
  const [value, setValue] = useState()
  const [edit, setEdit] = useState(false)
  const [update, setUpdate] = useState({index:null,value:null})
  
  
  const appTodo = (e) => {
    setValue(e.target.value)
  }

  const todoList = (e) =>{
    e.preventDefault()
    if(value !== "" ){
      const date = new Date().toLocaleDateString()
      const newList = {
        name: value,
        date: date,
        completed: false
    }
    setList([...List, newList])
    setValue('')
  }
  }

  //console.log(List)

  // const editItem = (value) =>{
  //     let newEditItem = value.find((name) =>{
  //       return name
  //     })
  //     console.log(newEditItem)
  //     setValue(newEditItem.lists)
  // }

  
  const handleEditing = () => {
    //console.log("edit mode activated")
    setEdit({
      editing: true
    })
  }
  let viewMode = {}
  let editMode = {}

if (edit.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}
  const listRemove = (index) => {
    const newLists = [...List]
    newLists.splice(index, 1)
    setList(newLists)
  }

  const listRemoveAll = () => {
    setList([])
  }

  return(
    <div>
      <Form value={value} appTodo={appTodo} todoList={todoList} />
      <Todo List={List} setList={setList} update={update} setUpdate={setUpdate} handleEditing={handleEditing} listRemove={listRemove} listRemoveAll={listRemoveAll} />

    </div>
  )

  
}

export default App;
