import './index.css';
import {useFormik} from 'formik';

function App() {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,}$'
 );
 
  let touched = {
    email: false,
    psw: false
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = "Field Required";
      } else {
        if( !validEmail.test(values.email)) {
          errors.email = "Username should be an email";
        }
      }

      if (!values.password) errors.password = "Field required";
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div> Email: 
        </div>
        <input id="emailField" name = 'email' type='email'
          onChange={formik.handleChange} value= {formik.values.email}>
        </input>
        <div id="emailError">
          {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null }
        </div>
        <div> Password:
        </div>
        <input id="pswField" name = 'password' type='password'
            onChange={formik.handleChange} value= {formik.values.password}>
        </input>
        <div id="pswError">
          {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null }
        </div>
        <button id="submitBtn" type='submit' >Submit</button>
        
      </form>
      
    </div>
  );
}

export default App;
