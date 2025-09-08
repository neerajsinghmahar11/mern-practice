import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Hello = () => {
  let [data,setData]=useState([]);
  

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);
  console.log(data)



  return (
    <div className='text-3xl font-bold underline'>
      <h2>Todo List</h2>
      {data.map((items)=>(
        <Card
        key={items.id}
        title={items.title}
        completed={items.completed}
        />
      ))}
    </div>
    
  )
}

export default Hello