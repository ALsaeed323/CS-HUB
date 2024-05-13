import { Router } from 'express';
import  signinform  from '../controllers/signin_config.js'
import  user_config from '../controllers/user_config.js'
import { isAuth } from "../controllers/authusers.js";



var router = Router();

router.get('/signin', function(req, res) {
res.render("pages/signin");

 
});


router.post("/",signinform.signinform);
router.post("/logout",user_config.logout);

export default router;