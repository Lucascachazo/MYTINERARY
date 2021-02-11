import {connect} from 'react-redux'
import usersActions from '../redux/actions/authAction'
import {useEffect} from 'react'

//Componente para desloguer a un usuario
const LogOut = (props) =>{
    useEffect(()=> {
        props.unlogUser()
        props.history.push('/')
    }, [])
    return(
        null
    )
}

const mapDispatchToProps={
    unlogUser : usersActions.unlogUser
}

export default connect(null, mapDispatchToProps)(LogOut)