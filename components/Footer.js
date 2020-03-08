import Link from 'next/link';

import logo from '../static/FotoLuisBrito.jpg';

const Footer = () => {
    return ( 
    <div className="Footer">
        <div className="container-fluid-footer">
            <div className="Footer__brand">
                <Link href="/">
                    <a className="Footer__brand">
                    <img className="Footer__brand-logo" src={logo} alt="Logo" />
                    <span className="font-weight-light">Luis</span>
                    <span className="font-weight-bold">Brito </span>
                    <span className="font-weight-light"><i>En desarrollo...</i></span>
                    </a>
                </Link>
            </div>
        </div>

        <style jsx>{`
            .Footer {
                width: 100%;
                padding: 0.5rem 0;
                background-color: #1C3643;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .Footer__brand {
                color: #ffffff;
                display: block;
                align-items: center;
                text-decoration: none;
              }
              .Footer__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }
              .Footer__brand-logo {
                margin-right: 0.5rem;
                width: 25px;
                border-radius: 50%;
              }
              .Footer__items{
                padding-left: 30px;
                color: #ffffff;
                text-decoration: none;
              }
              .Footer__items:hover {
                color: #ffffff;
                text-decoration: none;
              }
              .container-fluid-footer {
                width: auto;
                padding-left: 15px;
            }

              .Footer > .container,
              .Footer > .container-fluid {
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
                .Footer-expand-sm > .container,
                .Footer-expand-sm > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .Footer-expand-sm > .container,
              .Footer-expand-sm > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 767.98px) {
                .Footer-expand-md > .container,
                .Footer-expand-md > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .Footer-expand-md > .container,
              .Footer-expand-md > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 991.98px) {
                .Footer-expand-lg > .container,
                .Footer-expand-lg > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .Footer-expand-lg > .container,
              .Footer-expand-lg > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 1199.98px) {
                .Footer-expand-xl > .container,
                .Footer-expand-xl > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .Footer-expand-xl > .container,
              .Footer-expand-xl > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              .Footer-expand > .container,
              .Footer-expand > .container-fluid {
                padding-right: 0;
                padding-left: 0;
              }
              .Footer-expand > .container,
              .Footer-expand > .container-fluid {
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

export default Footer;