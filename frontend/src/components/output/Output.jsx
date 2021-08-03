import React, { useEffect } from 'react'
import './Output.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData } from '../../redux/action';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Output = () => {
    
    const {data} = useSelector(state => state.dataReducer);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchData());
    },[dispatch])
    
    const deleteHandler = (e) =>{
        dispatch(deleteData(e.target.id));
        setTimeout(()=>{ 
            dispatch(fetchData());
        },500)
    }
    return (
        <>
            <ul className="lists">
            {data && data.map((value, index) => (
                <div key={index} className="list">
                    <li>{value.item}</li>
                    <DeleteForeverIcon onClick={deleteHandler} id={value.id} className="deletebtn"/>
                </div>
            ))}
            </ul>
        </>
    )
}

export default Output
