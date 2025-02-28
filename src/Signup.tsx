import "./Signup.css"

function Signup() {

    return (
      <div className='signup-page'>
  
        <div className="signuppage">
          <h2> SignUp Page </h2>
          <div >
            <label htmlFor="email">Email ID:</label>
            <input type="email" placeholder='Email' />
          </div>
  
          <div >
            <label htmlFor="password">Password:</label>
            <input type="Password" placeholder='Password' />
          </div>
  
          <div >
            <label htmlFor="password">New Password:</label>
            <input type="Password" placeholder='NewPassword' />
          </div>
  
          <div >
            <label htmlFor="number">OTP:</label>
            <input type="number" placeholder='OTP' />
          </div>
  
          <button type='submit'> submit</button>
  
        </div>
      </div>
    )
  }
  
  export default Signup