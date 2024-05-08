import Signup from "../models/signup_schema.js";
import bcrypt from 'bcrypt';

const signinform = async (req, res) => {
  try {

    const email=req.body.logmail
    const mypassword=req.body.logpassword 

   
    const user = await Signup.findOne({ mail: email });

    if (user) {
     
      const passwordMatch = await bcrypt.compare(mypassword, user.password);

      if (passwordMatch) {
        console.log("User found and password matched:", user);
        req.session.User = user;
        if(req.session.User.Type==='user'){
   
          res.render('pages/index', { user: req.session.User });
  
        }
    else{
   
         

      res.render('pages/index', { user: req.session.User });
    }
        
      } else {
        console.log("Password mismatch.");
        
      }
    } else {
      console.log("User not found.");
      
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
   
  }
};

const exportsignin = {
  signinform,
};
export default exportsignin;




