import { Router } from 'express';
import Resource from "../models/resource_schema.js";
import {getAI,getcyber,getsoftware} from "../controllers/coursesController.js"




var router = Router();

router.get('/resources',  async function (req, res) {
    const resources = await Resource.find();
    req.session.Resource=resources;
    
  
res.render("pages/resources",{ resource: resources,user: req.session.User });

 
});

router.get('/ai',getAI);
router.get('/cybersecurity',getcyber);
router.get('/softwareengineer',getsoftware);
export default router;