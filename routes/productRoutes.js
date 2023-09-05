const express = require("express");
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist, rating, uploadImages, deleteImages } = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);

router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImages);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-imd/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
