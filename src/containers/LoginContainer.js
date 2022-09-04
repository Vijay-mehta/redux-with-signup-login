import Login from "../components/Login";
import {connect} from 'react-redux'
import {loginfun} from '../services/actions/Action'

const mapStateToProps = state=>({
    data:state.userLogin
})

const mapDispatchToProps = dispatch=>({
loginfun:(payload)=>dispatch(loginfun(payload))
})



function LoginContainer ({loginfun ,data}){
    return(
        <Login loginfun={loginfun } data={data}/>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)