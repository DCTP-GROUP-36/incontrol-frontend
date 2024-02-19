

import "../CSS/registerPageInfo.css"

function RegisterPageInfo () {
    return (
        <div className="register-page-info-container">
            <div>
                <p>InControl</p>
                <p>A sure solution to social media slavery</p>
            </div>
            <div>
                <img src={require("../assets/register-page-image.png")} className="register-page-image" alt="register-page"></img>
            </div>
        </div>
    )
}

export default RegisterPageInfo