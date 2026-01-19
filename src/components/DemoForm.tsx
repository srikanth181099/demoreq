import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8RoJOPOuyEV4lSvqX7lC4fZQ4FcXLjl_Zkj_4CR1BXLDNRMi-PV3cYuWjtrYxXsT-Og/exec";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validatePhone = (phone: string): boolean => {
    // Must start with + and country code, followed by 7-15 digits
    const phoneRegex = /^\+[1-9]\d{7,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter phone with country code (e.g., +1234567890).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for submission
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);

      // Submit to Google Sheets using no-cors mode
      // This will submit the data but we won't get a readable response
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: submitData,
        mode: "no-cors",
      });

      // Open WhatsApp with message
      const message = `SAP Demo Request%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}`;
      window.open(`https://wa.me/19086206699?text=${message}`, "_blank");

      toast({
        title: "Demo Request Sent!",
        description: "We'll contact you shortly on WhatsApp.",
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      // Still open WhatsApp even if Google Sheets fails
      const message = `SAP Demo Request%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}`;
      window.open(`https://wa.me/19086206699?text=${message}`, "_blank");
      
      toast({
        title: "Demo Request Sent!",
        description: "We'll contact you shortly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="py-16 px-4">
      <div className="container max-w-2xl">
        <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 card-shadow animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 badge-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get 1-Day Free SAP Demo
            </h2>
            <p className="text-muted-foreground">
              Submit your details and get instant demo access on WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-14 bg-muted/50 border-0 rounded-xl text-card-foreground placeholder:text-muted-foreground/60"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-14 bg-muted/50 border-0 rounded-xl text-card-foreground placeholder:text-muted-foreground/60"
            />
            <Input
              name="phone"
              placeholder="WhatsApp Number (e.g., +1234567890)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-14 bg-muted/50 border-0 rounded-xl text-card-foreground placeholder:text-muted-foreground/60"
            />
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Demo Request
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
