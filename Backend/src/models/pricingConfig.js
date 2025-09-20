import mongoose from "mongoose";

const pricingConfigSchema = new mongoose.Schema(
  {
    scope: {
      type: String,
      enum: ["global", "region"],
      default: "region",
    },

    region: {
      type: String, // e.g. "EU", "ASIA", "US"
      required: function () {
        return this.scope === "region";
      },
    },

    charges: {
      flight: {
        platformFee: {
          value: { type: Number, required: true, default: 0 },
          type: {
            type: String,
            enum: ["percentage", "fixed"],
            default: "percentage",
          },
        },
        markupFee: {
          value: { type: Number, required: true, default: 0 },
          type: {
            type: String,
            enum: ["percentage", "fixed"],
            default: "percentage",
          },
        },
        refundConfig: {
          enableFullRefund: { type: Boolean, default: false },
          refundWithExtraCharge: {
            value: { type: Number, default: 0 }, // always percentage
            type: { type: String, enum: ["percentage"], default: "percentage" },
          },
        },
      },

      hotel: {
        platformFee: {
          value: { type: Number, required: true, default: 0 },
          type: {
            type: String,
            enum: ["percentage", "fixed"],
            default: "percentage",
          },
        },
        markupFee: {
          value: { type: Number, required: true, default: 0 },
          type: {
            type: String,
            enum: ["percentage", "fixed"],
            default: "percentage",
          },
        },
        refundConfig: {
          enableFullRefund: { type: Boolean, default: false },
          refundWithExtraCharge: {
            value: { type: Number, default: 0 }, // always percentage
            type: { type: String, enum: ["percentage"], default: "percentage" },
          },
        },
      },
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/* ---------- Indexes ---------- */

// Only one global config allowed
pricingConfigSchema.index(
  { scope: 1 },
  { unique: true, partialFilterExpression: { scope: "global" } }
);

// Unique region config per region
pricingConfigSchema.index(
  { scope: 1, region: 1 },
  { unique: true, partialFilterExpression: { scope: "region" } }
);

/* ---------- Error Handling Middleware ---------- */
pricingConfigSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    if (error.keyPattern?.name) {
      next(new Error("A pricing config with this name already exists."));
    } else if (error.keyPattern?.scope && error.keyValue?.scope === "global") {
      next(
        new Error(
          "A global pricing config already exists. Only one is allowed."
        )
      );
    } else if (error.keyPattern?.region) {
      next(
        new Error(
          `A pricing config already exists for region "${error.keyValue.region}".`
        )
      );
    } else {
      next(new Error("Duplicate entry not allowed."));
    }
  } else {
    next(error);
  }
});

export default mongoose.model("PricingConfig", pricingConfigSchema);
