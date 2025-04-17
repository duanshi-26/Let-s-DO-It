import React from 'react'
import { useState } from 'react'
import '../components/ToDo.css'

function ToDo() {
    let arr =[
        {
            title: "Morning Walk",
            desc:" Good for health at 7:00 AM"
        },
        {
            title: "Noon Walk",
            desc:" Good for health at 12:00 PM"
        },
        {
            title: "Night Walk",
            desc:" Good for health at 7:00 PM"
        }
    ]

    let [array, setArray] = useState(arr);
    // heading ka ek component
    function Heading(){
        return(
            <>
            <h1>My To-do List</h1>
            </>
        )
    }

    function ShowToDo(){
        return(
            array.map((item, index)=>{
                return(
                    <div key={index} className="task-item">
    <h1>Let's do: {item.title}</h1>
    <p>Because: {item.desc}</p>
</div>
                )
            })

        )
    }

    function AddToDo({array, setArray}){
        let [inp1, setInp1] = useState("");
        let [inp2, setInp2] = useState("");

        function handleInput(e){
                setInp1(e.target.value);          
        }
        function handleInput2(e){
            setInp2(e.target.value);
        }

        function handleClick()
        {
            setArray([...array, {title: inp1, desc: inp2}]);
        }
        return (
            <div className="todo-form">
                <input onChange={handleInput} type="text" value={inp1} placeholder="Task Title" />
                <input onChange={handleInput2} type="text" value={inp2} placeholder="Task Description" />
                <button onClick={handleClick}>Add</button>
            </div>
        );
        
    }
    return (
        <div className="todo-container">
            <Heading />
            <ShowToDo />
            <AddToDo array={array} setArray={setArray} />
        </div>
    );
    
}

export default ToDo