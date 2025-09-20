import PricingConfig from "../models/pricingConfig.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add Pricing Config
export const addPricingConfig = asyncHandler(async (req, res, next) => {
  const { region, charges, isActive } = req.body;

  // Create new pricing config
  const pricingConfig = await PricingConfig.create({
    region,
    charges,
    isActive,
  });

  res.status(201).json({
    status: true,
    message: "Pricing configuration created successfully!",
    data: pricingConfig,
  });
});

export const getAllPricingConfig = asyncHandler(async (req, res) => {
  const data = await PricingConfig.find().sort({ isActive: -1 });

  res.status(200).json({
    success: true,
    data,
  });
});
