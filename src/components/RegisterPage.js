
import RegisterForm from "./RegisterForm"
import RegisterPageInfo from "./RegisterPageInfo"
import "../CSS/registerPage.css"

function Register () {
    return (
        <div className="register-page-container">
            <RegisterForm />
            <RegisterPageInfo />
        </div> 
    )
}

export default Register 