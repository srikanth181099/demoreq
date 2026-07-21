import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  website: "https://us.way2erp.com",
  paypal: "https://paypal.me/mascorpit",
  paypalEmail: "mascorpit@gmail.com",
  demoRequestUrl: "https://us.way2erp.com/#contact",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact & payment info",
  description: "Get Way2ERP contact details, demo request URL, and PayPal payment link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
