const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/20">
      <div className="container max-w-4xl text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Way2ERP. All rights reserved. | SAP S/4HANA Remote Access & Training
        </p>
      </div>
    </footer>
  );
};

export default Footer;
