import Resource from "../models/resource_schema.js";

const getAI=async(req,res)=>{
    const query={ category:"AI"};
    const resources = await Resource.find(query);
    req.session.Resource=resources;
    
  
res.render("pages/resources",{ resource: resources,user: req.session.User });
};
const getcyber=async(req,res)=>{
    const query={ category:"Cyber-Security"};
    const resources = await Resource.find(query);
    req.session.Resource=resources;
    
  
res.render("pages/resources",{ resource: resources,user: req.session.User });
};
const getsoftware=async(req,res)=>{
    const query={ category:"Software-Engineer"};
    const resources = await Resource.find(query);
    req.session.Resource=resources;
    
  
res.render("pages/resources",{ resource: resources,user: req.session.User });
};
export {getAI,getcyber,getsoftware};
