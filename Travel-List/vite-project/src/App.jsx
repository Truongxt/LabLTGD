import { useState } from "react";
import "./index.css"
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleRemoveAllItems() {
    if(items.length <= 0){
      alert("Items is null")
      return;
    }
    const comfirm = window.confirm('Are you sure you want to delete all items?');
    if(comfirm)
    setItems(items => [])
    
  }

  function handleRemoveItems(itemToRemove) {
    setItems(items => items.filter(item => item.id !== itemToRemove.id))
  }
  function handleToggleItems(item) {
    setItems(items => items.map((i) => {
      return item.id === i.id ? { ...i, packed: !i.packed } : i
    }))
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList items={items} onRemoveItems={handleRemoveItems} onToggleItem={handleToggleItems} onRemoveAllItems={handleRemoveAllItems} />
        <Stats items={items} />
      </div>
    </>
  )
}





