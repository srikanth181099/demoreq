import { defineMcp } from "@lovable.dev/mcp-js";
import getPricing from "./tools/get-pricing";
import getFeatures from "./tools/get-features";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "way2erp-mcp",
  title: "Way2ERP MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for Way2ERP, an SAP S/4HANA training platform. Use these tools to look up pricing plans, platform features, and contact/payment info.",
  tools: [getPricing, getFeatures, getContact],
});
