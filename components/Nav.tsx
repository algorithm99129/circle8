import Link from "next/link";
import { Logo } from "./Icon";
import { navLinks, site } from "@/content/site";

export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <Link className="brand" href="#top"><Logo />{site.name}</Link>
      <ul className="nav-links">
        {navLinks.map((l) => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
      <Link className="btn small nav-cta" href="#join">Get early access</Link>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <Link className="brand" href="#top"><Logo />{site.name}</Link>
      <ul>
        <li><Link href="#how">How it works</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#privacy">Privacy</Link></li>
        <li><Link href="#faq">FAQ</Link></li>
        <li><Link href="#join">Early access</Link></li>
      </ul>
      <div>{site.name} is a working name. © {new Date().getFullYear()}</div>
    </footer>
  );
}
