import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Output.css'

const Output = () => {
    
    const [data , setData] = useState();
    useEffect(()=>{
        const value = localStorage.getItem("data");
        setData(JSON.parse(value));
    })

    const updateLocalStorage = (id)=>{
        const UDdata = data.filter(value => value.id === Number(id));
        setData(UDdata);
        localStorage.setItem("data", UDdata)
    }
    const deleteHandler = async (e)=>{
        const result = await axios.get(`http://localhost:8080/app/delete${e.target.id}`)
        if(result.status === 200){
            updateLocalStorage(e.target.id);
        }
        
    }
    return (
        <>
            <ul>
            {data && data.map((value, index) => (
                <div key={index} className="list">
                    <li>{value.item}</li>
                    <button onClick={deleteHandler} id={value.id}>delete</button>
                </div>
            ))}
            </ul>
        </>
    )
}

export default Output
