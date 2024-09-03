require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz-lts");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRouter = require("./router/Service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const { object } = require("zod");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use("/api/data", serviceRouter);

// let's define admin route
app.use("/api/admin", adminRoute);

// payment route start

app.post("/api/create-payment", async (req, res) => {
  const paymentInfo = req.body;
  const initialData = {
    store_id: "ecomm66d70b0287a5c",
    store_passwd: "ecomm66d70b0287a5c@ssl",
    total_amount: paymentInfo.amount,
    currency: "BDT",
    tran_id: "REF123",
    success_url: "http://localhost:5173/paymentsuccess",
    fail_url: "http://localhost:5173/paymenterror",
    cancel_url: "http://localhost:5173/fail",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Books.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const response = await axios({
    method: "POST",
    url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
    data: initialData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  res.send({
    paymentUrl: response.data.GatewayPageURL,
  });
});

app.post("/paymentsuccess", async (req, res) => {
  const successData = req.body;

  if (successData.status !== "Valid") {
    throw new Error("Unauthorized payment");
  }

  console.log("successData", successData);

  res.redirect("http://localhost:5173/paymentsuccess");
});
app.post("/paymenterror", async (req, res) => {
  res.redirect("http://localhost:5173/paymenterror");
});
app.post("/fail", async (req, res) => {
  res.redirect("http://localhost:5173/fail");
});

// payment route end

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`our server is running in ${PORT}`);
  });
});
