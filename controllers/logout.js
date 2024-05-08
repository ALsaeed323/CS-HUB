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
  
  export { logout };
  