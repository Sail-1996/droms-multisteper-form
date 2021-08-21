
import axios from "axios"

const url="http://localhost:4000/employee";

export const getUsers=async(_id)=>{
    _id=_id||'';
    return await axios.get(`${url}/${_id}`);
}

export const addUser=async(user)=>{
    return await axios.post(url,user);
}

export const deleteUser = async (_id) => {
    return await axios.delete(`${url}/${_id}`);
}

export const editUser=async(_id,user)=>{
    return await axios.patch(`${url}/${_id}`,user)
}