import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      variant="whatsapp"
      size="lg"
      className="fixed bottom-6 right-6 z-50 animate-float"
      asChild
    >
      <a href="https://wa.me/19086206699" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5" />
        WhatsApp Us
      </a>
    </Button>
  );
};

export default WhatsAppButton;
