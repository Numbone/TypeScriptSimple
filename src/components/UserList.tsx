import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../store/action-creators/user'

const UserList:React.FC = () => {
    const {users,error,loading}= useTypedSelector(state=>state.user)
    const {fetchUsers}=useActions()

    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div>{
        users.map(user=>
            <div key={user.id}>{user.name}</div>)}</div>
  )
}

export default UserList