
import "../CSS/formHeader.css"

function FormHeader(props) {
  return (
    <>
      <div className="register-form-container  form-logo-div" >
        <img src="../../incontrol-logo.png" alt="incontrol-logo" className="form-logo"></img>
        <div className="logo-text">InControl</div>
      </div>
      <div className="register-form-container">
        <h5>{props.formType}</h5>
      </div>
    </>
  );
}

export default FormHeader