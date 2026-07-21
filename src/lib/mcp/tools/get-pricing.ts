import { defineTool } from "@lovable.dev/mcp-js";

const plans = [
  { name: "1 Month", price: "$50", duration: "1 month", includes: ["System Access"] },
  { name: "3 Months", price: "$130", duration: "3 months", includes: ["System Access", "Self Learning Training Included"] },
  { name: "6 Months", price: "$250", duration: "6 months", includes: ["System Access", "Self Learning Training Included"] },
  { name: "1 Year", price: "$450", duration: "12 months", includes: ["System Access", "Self Learning Training Included"] },
  { name: "Dedicated Server", price: "From $499/month", duration: "monthly", includes: ["Dedicated SAP S/4HANA server"] },
];

export default defineTool({
  name: "get_pricing",
  title: "Get pricing plans",
  description: "Get all Way2ERP SAP S/4HANA subscription plans and pricing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(plans, null, 2) }],
    structuredContent: { plans },
  }),
});
