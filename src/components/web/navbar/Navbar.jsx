import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User.jsx';
import { cartcontext } from '../context/Cart.jsx';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  styles  from './Navbar.module.css';

export default function Navbar() {



  let {userToken,setUserToken,userData,setUserData}= useContext(UserContext);


  const { getCardContext} = useContext(cartcontext);

  const getCard = async () => {
    const res = getCardContext();
    
    return res;
  };

  const { data} = useQuery("cart", getCard);


  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserData(null);
    navigate("/");
  }
  return (
    <>
      <nav  className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img className={styles['website-logo']} src="../../../assets/Sstorelogo-removebg.png" alt="page logo" />
            <span className="navbar-title">Samir</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/categories'>
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/products'>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/AboutUs'>
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/ContactUs'>
                  ContactUs
                </Link>
              </li>

              {userToken && (
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {data?.count >0 && (<span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {data?.count}
                      <span className="visually-hidden">Cart Products</span>
                    </span>)}
                    

                    
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="drop-down-img nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userData != null ? <img className={styles['nav-profile-img']} src={userData?.image.secure_url} alt="" /> : "Account"}
                </a>
                <ul className="dropdown-menu ">
                  {!userToken ? (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/register">
                          register
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-danger"
                          onClick={logout}
                        >
                          logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
