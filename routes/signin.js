import { Router } from 'express';
import  signinform  from '../controllers/signin_config.js'



var router = Router();

router.get('/signin', function(req, res) {
 
  
res.render("pages/signin");

 
});


router.post("/signinform",signinform.signinform);

export default router;