import { Fragment } from 'react'
import './Login.css'

export default function Login(){
    return(
        <Fragment>
        <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div class="form-group">
                <div class="row">
                    <div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" /></div>
                    <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
                </div>        	
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
            </div>        
            <div class="form-group">
                <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
            </div>
        </form>
        <div class="hint-text">Already have an account? <a href="#">Login here</a></div>
    </div>
        </Fragment>
      
    )
  
}
