import Signup from "../components/Signup";
import {connect} from 'react-redux'
import {Signupfun} from '../services/actions/Action'


const mapStateToProps =state =>({
data:state.userSignup
})


const mapDispatchToProps = dispatch=>({
    Signupfun:(payload)=>dispatch(Signupfun(payload))
})




function SignupContainer ({Signupfun ,data}){
    return(
        <Signup Signupfun={Signupfun } data={data}/>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer)