import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Cart from '../components/WishList';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full h-20 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div className="flex gap-3 justify-center items-center">
            <img className="h-8" src={logo} alt="log" />
            <h1 className="text-3xl font-semibold text-yellow-400">
              Lite<span className="text-red-500">rati</span>
            </h1>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">All Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Add Book</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              </li>
              <li>
                <Cart />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
