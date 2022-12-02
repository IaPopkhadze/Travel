import "./registration.css";
const Registration = () => {
  return (
    <div id="registration">
      <div className="registrationContainer">
        <div className="registrationContainer1">
          <h1>SING IN</h1>
          <input
            className="inp"
            type="text"
            placeholder="EMAIL ADDRESS*"
            required
          />
          <input className="inp" type="text" placeholder="PASSWORD*" required />
          <div className="checkBoxContainer">
            <input className="checkbox" type="checkbox" />
            <label>REMEMBER ME</label>
          </div>
          <button className="registrationButton">SIGN IN</button>
        </div>

        <div className="registrationContainer2">
          <h1>Sign up</h1>
          <div className="nameSurname">
            <input type="text" placeholder="First name*" />
            <input type="text" placeholder="last name*"/>
          </div>
          <input type="text" placeholder="email*" />
          <input type="text" placeholder="confirm email*"/>
          <input type="text" placeholder="password*" />
          <input type="text"  placeholder="confirm password*"/>
           <div className="checkBoxx">
              <input type="checkbox" />
               <label>accept terms and conditions</label>
           </div>
           <button className="signUpBtn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
