import Link from 'next/link';

import logo from '../static/FotoLuisBrito.jpg';

const Navbar = () => {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <div className="Navbar__brand">
          <Link href="/">
            <a className="Navbar__brand">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="font-weight-light">Luis</span>
              <span className="font-weight-bold">Brito </span>
            </a>
          </Link>

              <a className="font-weight-light Navbar__items" href="/index#datos">
                Datos
              </a>


              <a className="font-weight-light Navbar__items" href="/index#studies" >
                Estudios
              </a>

              <a className="font-weight-light Navbar__items" href="/index#works" >
                Experiencia
              </a>
              <a className="font-weight-light Navbar__items" href="/index#portfolio" >
                Portafolio
              </a>
            </div>
        </div>

        <style jsx>{`
            .Navbar {
                width: 100%;
                padding: 0.5rem 0;
                background-color: #1C3643;
              }
              .Navbar__brand {
                color: #ffffff;
                display: inline-flex;
                align-items: center;
                text-decoration: none;
              }
              .Navbar__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }
              .Navbar__brand-logo {
                margin-right: 0.5rem;
                width: 25px;
                border-radius: 50%;
              }
              .Navbar__items{
                padding-left: 30px;
                color: #ffffff;
                text-decoration: none;
              }
              .Navbar__items:hover {
                color: #ffffff;
                text-decoration: none;
              }
              .container-fluid {
                width: 100%;
                padding-left: 15px;

              }
              .navbar > .container,
              .navbar > .container-fluid {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: justify;
                justify-content: space-between;
              }

              @media (max-width: 575.98px) {
                .navbar-expand-sm > .container,
                .navbar-expand-sm > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-sm > .container,
              .navbar-expand-sm > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 767.98px) {
                .navbar-expand-md > .container,
                .navbar-expand-md > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-md > .container,
              .navbar-expand-md > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 991.98px) {
                .navbar-expand-lg > .container,
                .navbar-expand-lg > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-lg > .container,
              .navbar-expand-lg > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 1199.98px) {
                .navbar-expand-xl > .container,
                .navbar-expand-xl > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-xl > .container,
              .navbar-expand-xl > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              .navbar-expand > .container,
              .navbar-expand > .container-fluid {
                padding-right: 0;
                padding-left: 0;
              }
              .navbar-expand > .container,
              .navbar-expand > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }

              .font-weight-light {
                font-weight: 300 !important;

              }
              .font-weight-bold {
                font-weight: 700 !important;

              }
        `}</style>
      </div>
    );
  }


export default Navbar;