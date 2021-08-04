import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {fetchData, storeData} from '../../redux/action';
import Button from '@material-ui/core/Button';
import './Input.css'
const Input = () => {

    const [item, setItem] = useState({
        id : 0,
        title : ''
    })
    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault();
        dispatch(storeData(item)) 
        setItem({
            id : Number(item.id) +1,
            title : ''
        })

        setTimeout(() => {
            dispatch(fetchData())
        }, 500);
    }
    const itemHandler = (e)=>{
        setItem({
            ...item,
            title : e.target.value
        })
    }
    return (
        <form onSubmit={formHandler}>
            <input className="input" type="text" placeholder="Item Name" name="title" onChange={itemHandler} value={item.title}/>
            <Button variant="contained" color="primary">ADD</Button>
        </form>
    )
}

export default Input
