import { Router } from 'express';
import Resource from "../models/resource_schema.js";





var router = Router();

router.get('/resources',  async function (req, res) {
    const resources = await Resource.find();
    req.session.Resource=resources;
    
  
res.render("pages/resources",{ resource: req.session.Resource,user: req.session.User });

 
});

export default router;