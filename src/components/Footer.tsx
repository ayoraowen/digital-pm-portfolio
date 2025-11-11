const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Digital Product Manager Portfolio
          </p>
          <p className="text-sm text-primary-foreground/80">
            Built with passion for great products
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
