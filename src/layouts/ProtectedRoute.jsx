import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { selectToken } from '../store/reducers/authSlice'
import { isLoggedin } from '../helpers/isLoggedIn'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate(null)
    const token = useSelector(selectToken)
    
    
    useEffect(()=>{
        if(!isLoggedin(token)){
            navigate('/')
            return
        }
    },[navigate,isLoggedin(token)])

  return children
}


export default ProtectedRoute
