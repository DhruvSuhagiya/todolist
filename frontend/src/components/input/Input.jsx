import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {storeData} from '../../redux/action';
import axios from 'axios';
const Input = () => {

    const [item, setItem] = useState({
        id : 0,
        title : ''
    })
    const selector = useSelector(state=>state.dataReducer)
    const dispatch = useDispatch();

    useEffect(() => async () => {
        const code = await axios.get("http://localhost:8080/app/getdata");
        await localStorage.setItem("data", JSON.stringify(code.data));
    },[selector]);
    const [data, setData] = useState([]);

    const sendRequest = async (item) => {
        const code = await axios.post("http://localhost:8080/app/additem",item);
        if(code.status === 200){
            console.log("data Added");  
        }
    }
    const formHandler = (e) => {
        e.preventDefault();

        setData([...data,item])

        dispatch(storeData(item))
        sendRequest(item);
        
        setItem({
            id : Number(item.id) +1,
            title : ''
        })
    }
    const itemHandler = (e)=>{
        setItem({
            ...item,
            title : e.target.value
        })
    }
    return (
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Item Name"  name="title" onChange={itemHandler} value={item.title}/>
            <button>ADD</button>
        </form>
    )
}

export default Input
