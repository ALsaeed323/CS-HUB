import { Router } from 'express';



var router = Router();

router.get('/signin', function(req, res) {
 
  
res.render("pages/signin");

 
});


export default router;