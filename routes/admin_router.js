import { Router } from "express";
import admin_config from "../controllers/admin_config.js";
import { uploadImage } from "../controllers/uploadControllers.js";
import { isAdmin } from "../controllers/authusers.js";
import Resource from "../models/resource_schema.js";

var router = Router();

router.get("/adminDashboard",  isAdmin, async function (req, res) {
  const resources = await Resource.find();
      
  res.render("pages/adminDashboard", { resources  });
});
router.get("/addresource",  isAdmin, function (req, res) {
  res.render("pages/addresource");
});
router.get("/updateResource/:id",  isAdmin, function (req, res) {
  res.render("pages/updateResource");
});

router.post("/addResource", uploadImage, admin_config.addResource);
router.post("/updateResource/:id",  admin_config.updateResource);
router.post("/deleteResource/:id",  admin_config.deleteResource);




export default router;
