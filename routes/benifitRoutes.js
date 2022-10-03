const { application } = require('express');
const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove,
} = require("../controllers/benifitsController");

router.get("/benifits", list);
router.get("/benifits/:id", show);
router.post("/benifits", create);
router.put("/benifits/:id", update);
router.delete("/benifits/:id", remove);

module.exports = router;