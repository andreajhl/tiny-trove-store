import Link from 'next/link';
import Search from '../../search';
import CartCollapse from '@/components/cart/cartCollapse';
import Image from 'next/image';
import './styles.scss';

const NavBar = () => (
  <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">
        <Image src="/images/home/logo.jpeg" className="brand" alt="logo" width={200} height={90} />
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
    <div className="collapse navbar-collapse" id="navbar">
      <div className="navbar-search">
        <Search />
      </div>
      <div className="navbar-cart">
        <CartCollapse />
      </div>
    </div>
    </div>
  </nav>
);

export default NavBar;
