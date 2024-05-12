import { Router } from "express";
import admin_config from "../controllers/admin_config.js";
import { uploadImage } from "../controllers/uploadControllers.js";

var router = Router();

router.get("/adminDashboard", function (req, res) {
  res.render("pages/adminDashboard");
});
router.get("/addresource", function (req, res) {
  res.render("pages/addresource");
});

router.post("/addResource", uploadImage, admin_config.addResource);

export default router;
