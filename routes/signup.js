import { Router } from 'express';




var router = Router();

router.get('/signup', function(req, res) {
 
  
res.render("pages/signup");

 
});


export default router;