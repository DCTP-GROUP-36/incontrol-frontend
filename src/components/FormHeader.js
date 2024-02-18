function FormHeader(formType) {
  return (
    <>
      <div className="register-form-container  form-logo-div">
        <img src="../../incontrol-logo.png" alt="incontrol-logo"></img>
      </div>
      <div className="register-form-container">
        <h5>{{formType}}</h5>
      </div>
    </>
  );
}

export default FormHeader