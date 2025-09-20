import PricingConfig from "../models/pricingConfig";

export async function getPricingConfig(region, bookingType = "flight") {
  // First check if region-specific config exists
  let config = await pricingConfig.findOne({
    scope: "region",
    region,
    isActive: true,
  });

  if (!config) {
    // Fallback to global
    config = await PricingConfig.findOne({ scope: "global", isActive: true });
  }

  if (!config) throw new Error("No pricing configuration found.");

  return config.charges[bookingType];
}
