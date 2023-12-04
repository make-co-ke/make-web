import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/" className="logo">
          <Image src="/assets/site/logo.png" width={110} height={100} />
        </Link>
      </div>
      <div className="menu">
        <Link href="/" className="menu__item">
          Home
        </Link>
        <Link href="/" className="menu__item">
          Services
        </Link>
        <Link href="/" className="menu__item">
          Products
        </Link>
        <Link href="/" className="menu__item">
          Blog
        </Link>
        <Link href="/" className="menu__item">
          Explore
        </Link>
      </div>
      <div className="header__actions">
        <Link href="/" className="__action action__light">
          Get quote
        </Link>
        <Link href="/" className="__action action__solid">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Header;
