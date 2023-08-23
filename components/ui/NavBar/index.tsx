import Link from 'next/link';
import Search from '../../search';
import CartCollapse from '@/components/cart/cartCollapse';
import Image from 'next/image';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary pe-5 ps-5">
    <div className="container-fluid">
      <Link className="navbar-brand w-25" href="/">
        <Image src="/images/home/logo.jpeg" alt="logo" width={200} height={90} />
      </Link>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse w-75" id="navbar">
      <div className="w-50">
        <Search />
      </div>
      <div className="w-50 d-flex flex-row justify-content-end">
        <CartCollapse />
      </div>
    </div>
    </div>
  </nav>
);

export default NavBar;
