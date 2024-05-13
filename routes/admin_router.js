import { Router } from "express";
import admin_config from "../controllers/admin_config.js";
import { uploadImage } from "../controllers/uploadControllers.js";
import { isAdmin } from "../controllers/authusers.js";

var router = Router();

router.get("/adminDashboard",  isAdmin, function (req, res) {
  res.render("pages/adminDashboard");
});
router.get("/addresource",  isAdmin, function (req, res) {
  res.render("pages/addresource");
});

router.post("/addResource", uploadImage, admin_config.addResource);

export default router;
