const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <span className="text-sm font-bold tracking-widest text-foreground">USTA</span>
        <p className="text-xs text-muted-foreground">© 2026 Usta, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
