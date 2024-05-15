import Signup from "../models/signup_schema.js";
import bcrypt from 'bcrypt';



const logout = (req, res) => {
    try {
      // Destroy the user's session
      req.session.destroy(err => {
        if (err) {
          console.error('Error destroying session:', err);
          // Handle error, if needed
        } else {
          // Redirect the user to the home page or any other appropriate page after logout
          res.redirect('/');
        }
      });
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error, if needed
    }
  };
  const updateProfile = async (req, res) => {
    try {
      // Extracting user ID from the request parameters
      const userId = req.params.id;
      const saltRounds = 10;

  
      // Extracting profile data from the request body
      const { profileName, profileEmail, profilePassword, profileConfirmPassword } = req.body;
  
      // Validation: Check if passwords match
      if (profilePassword !== profileConfirmPassword) {
        return res.status(400).send("Passwords do not match");
      }
  
      // Here you can perform further validation or processing of the profile data
  
      // Assuming you have a User model
      const user = await Signup.findById(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      // Update user profile fields
      user.fullname = profileName;
      user.mail = profileEmail;
      
  const hashedPassword = await bcrypt.hash(profilePassword, saltRounds);


      if (profilePassword) {
        // Update password only if provided
        user.password = hashedPassword;
        user.cpassword = hashedPassword;
      }
  
      // Save the updated user object
      await user.save();
  
      // Redirect or send a success response
      res.redirect(`/profile`);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  
  
  
  const user_config = {
    logout,updateProfile,
  };
  export default user_config;
  