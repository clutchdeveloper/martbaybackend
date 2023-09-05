const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const prodcategoryRoutes = require("./routes/prodcategoryRoutes");

const blogRoutes = require("./routes/blogRoutes");
const blogCatRoutes = require("./routes/blogCatRoutes");
const brandRoutes = require("./routes/brandRoutes");
const colorRoutes = require("./routes/colorRoutes");
const couponRoutes = require("./routes/couponRoutes");
const enqRoutes = require("./routes/enqRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/category", prodcategoryRoutes);
app.use("/api/blogcategory", blogCatRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/enquiry", enqRoutes);
// app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.use("/", (req, res) => {
  res.send("Hello from server side");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
