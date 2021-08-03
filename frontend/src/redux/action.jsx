import axios from 'axios';

export const storeData = (item) => async dispatch => {
     const code = await axios.post("http://localhost:8080/app/additem",item);
     if(code.status === 200){
         dispatch ({
             type : 'DATA_STORE',
             payload : item
          })
     }
     else{
        dispatch ({
            type : 'DATA_STORE_FAIL',
            payload : code.statusText
         })
     }
};

export const fetchData = () => async (dispatch) => {
    const data = await axios.get("http://localhost:8080/app/getdata");
    dispatch ({
        type : 'DATA_GET',
        payload : data.data
     }
    )
}

export const deleteData = (id) => async (dispatch) => {
    const data = await axios.get(`http://localhost:8080/app/delete${id}`);
    if(data.status === 200){
        dispatch ({
            type : 'DATA_DELETED',
            payload : "Deleted Data"
         }
        )
    }
}