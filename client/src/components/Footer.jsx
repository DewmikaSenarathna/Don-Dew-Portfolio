import { brand } from "../data/site.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {brand.name}. Built with purpose.
        </span>
        <span className="footer__slogan">
          Ignite Purpose · Elevate Passion · Shape the Future.
        </span>
      </div>
    </footer>
  );
}
