import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <span className="text-base font-bold text-foreground">FieldOS</span>
          <div className="hidden items-center gap-6 md:flex">
            {["Platform", "Solutions", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
