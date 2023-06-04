import { useState } from "react";
import "./app.css"

function App() {
  const [newItem,setNewItem] = useState()
  const [itemList,setItemList] = useState([])

  const addItem = () =>{

    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    }

    setItemList(oldItems =>[...oldItems , item])
    setNewItem("")
    
  }
  const deleteItem = (id) =>{
    const newItemList = itemList.filter(item => item.id != id)
    setItemList(newItemList)
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
      type="text"
      placeholder="Enter Todo"
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {
          itemList.map(item=>{
            return(
              <li key={item.id}>
                {item.value}
                <button onClick={()=>deleteItem(item.id)}>X</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
