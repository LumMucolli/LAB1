import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    api.Lenda().fetchAll()
    .then(response => { 
            dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload:response.data
    })
     })
    .catch(err => console.log(err))   
}

export const create = (data, onSuccess) => dispatch =>{
    api.Lenda().create(data)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))   
}

export const update = (id, data, onSuccess) => dispatch =>{
    api.Lenda().update(id, data)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {id,...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))   
}

export const Delete = (id, onSuccess) => dispatch =>{
    api.Lenda().delete(id)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))   
}