
import LoginForm from "./LoginForm"
import LoginPageInfo from "./LoginPageInfo"
import "../CSS/registerPage.css"

function Login () {
    return (
        <div className="register-page-container">
            <LoginForm />
            <LoginPageInfo />
        </div> 
    )
}

export default Login 