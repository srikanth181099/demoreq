import { defineTool } from "@lovable.dev/mcp-js";

const features = [
  { title: "Enterprise S/4HANA", description: "Access real SAP S/4HANA 2025 systems with full Fiori UI experience." },
  { title: "Remote Access through RDP", description: "Multi-user remote access to the SAP environment via RDP." },
  { title: "Self Learning Training", description: "Included with 3-month, 6-month, and 1-year plans." },
];

export default defineTool({
  name: "get_features",
  title: "Get platform features",
  description: "List key features of the Way2ERP SAP S/4HANA training platform.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(features, null, 2) }],
    structuredContent: { features },
  }),
});
