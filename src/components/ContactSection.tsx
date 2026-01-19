import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container max-w-4xl">
        <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 card-shadow">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              We're here to help you start your SAP journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                <p className="font-semibold">+1 (908) 620-6699</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">contact@way2erp.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Global Remote Access</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="p-3 rounded-lg bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Support Hours</p>
                <p className="font-semibold">24/7 Available</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/19086206699" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:contact@way2erp.com">
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
