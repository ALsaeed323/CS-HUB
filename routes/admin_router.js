import { Router } from "express";
import admin_config from "../controllers/admin_config.js";
import { uploadImage } from "../controllers/uploadControllers.js";
import { isAdmin } from "../controllers/authusers.js";
import Resource from "../models/resource_schema.js";
import User from "../models/signup_schema.js";

var router = Router();

router.get("/adminDashboard",  isAdmin, async function (req, res) {
 
      
  res.render("pages/adminDashboard");
});
router.get("/adminresource",  isAdmin, async function (req, res) {
  const resources = await Resource.find();
      
  res.render("pages/adminresource", { resources  });
});
router.get("/adminusers",  isAdmin, async function (req, res) {
  const users = await User.find();
      
  res.render("pages/adminusers", { users  });
});
router.get("/addresource",  isAdmin, function (req, res) {
  res.render("pages/addresource");
});
router.get("/updateResource/:id",  isAdmin, function (req, res) {
  res.render("pages/updateResource");
});
router.get("/updateuser/:id",  isAdmin, function (req, res) {
  res.render("pages/updateuser");
});
router.get("/adduser",  isAdmin, function (req, res) {
  res.render("pages/adduser");
});


router.post("/addResource", uploadImage, admin_config.addResource);
router.post("/updateResource/:id",  admin_config.updateResource);
router.post("/deleteResource/:id",  admin_config.deleteResource);
router.post("/updateuser/:id",  admin_config.updateUser);
router.post("/deleteuser/:id",  admin_config.deleteUser);
router.post("/adduser", admin_config.addUser);




export default router;
