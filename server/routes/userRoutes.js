import express from "express";
import axios from "axios";

import { getProducts, getAuthToken } from "../controllers/userController.js";

const router = express.Router();

// Route to fetch the access token
router.get("/auth", getAuthToken);

// Route to retrieve products
router.get("/products/:company/:category", getProducts);
