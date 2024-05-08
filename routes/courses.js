import { Router } from 'express';



var router = Router();

router.get('/courses', function(req, res) {
 
  
res.render("pages/courses");

 
});

export default router;