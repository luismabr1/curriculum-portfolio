import Foto from '../static/FotoLuisBrito.jpg';

const PersonalData = () => (


<div className="container-datos">
    <div className="wrapper">
        <div className="datos-image">
            <img src={Foto}></img>
        </div>

        <div className="datos">
            <ul>
                <li> Nombre: Luis Manuel
                </li>
                <li> Apellido: Brito Romero
                </li>
                <li> Telefono: +58 414 092.96 .37
                </li>
                <li> Direccion: Charallave - Edo.Miranda
                </li>
                <li> Email: lsbrt4 @gmail.com
                </li>
            </ul>
        </div>
    </div>
        <div className="abstract">
            <div className="abstract-content">
                <p> Frelancer con intereses en los sistemas sociales, dinamica de sistemas, cibernetica e informatica.
                </p>
                <p>Desarrollador web con grandes aspiraciones en el area de las ciencias en general y en la informatica en particular.</p>
                <p>Apasionado a los videojuegos tanto
                    en su programacion y creacion como en su disfrute.</p>
            </div>
        </ div>
    <style jsx> { `

            .container-datos{
                width:100%;
                margin-top: 20px;
            }
            .wrapper{
                grid-gap: 10px;
                display: grid;
                margin-right: 70px;
                grid-template-columns: repeat(720px, 1fr);
                /* grid-template-columns: repeat(auto-fill, minmax(auto, 3fr)); */
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            }
            .datos{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                font-size: 20px;
            }
            .datos ul{
                list-style-type: none;
                margin: 0;
                justify-text: left;
            }
            .datos-image{
                margin-left: auto;
                margin-right: auto;
                width: 70%;
            }

            .datos-image img{
                width:100%;
                border-radius: 50%;
                align: center;
                border: 5px solid white;
            }

            .abstract{
                margin-right: 70px;
                margin-top: 20px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            }
            .abstract-content{
                text-align: center;
                width: 100%;
                word-wrap: break-word;
                font-size: 20px;
            }

            @media (min-width: 576px) {
                .container{
                    width:100%;
                }
                .wrapper{
                    grid-gap: 10px;
                    display: grid;
                     grid-template-columns: repeat(575px, 1fr); 
                    /* grid-template-columns: repeat(auto-fill, minmax(350px, 3fr)); */
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .datos{
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                    font-size: 20px;
                }
                .datos ul{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .datos-image{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 70%;
                }
                .datos-image img{
                    width:100%;
                    border-radius: 50%;
                    align: center;
                    border: 5px solid white;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract{
                    margin-right: 70px;
                    margin-top: 20px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract-content{
                    text-align: center;
                    width: 100%;
                    word-wrap: break-word;
                    font-size: 20px;
                }
              }
              @media (min-width: 820px) {
                .container{
                    width:100%;
                }
                .wrapper{
                    grid-gap: 10px;
                    display: grid;
                    justify-items: center;
                    /* grid-template-columns: repeat(575px, 1fr); */
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .datos{
                    text-align: center;
                    width: 100%;
                    font-size: 20px;
                    margin-top: auto;
                    margin-bottom: auto;
                }
                .datos ul{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .datos-image{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    grid-column: 1;
                    width: 70%;
                    padding-left: 100px;
                }
                .datos-image img{
                    width:100%;
                    border-radius: 50%;
                    align: center;
                    border: 5px solid white;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract{
                    display: grid;
                    grid-template-columns: repeat(365px, 1fr);
                    margin-right: auto;
                    margin-left: auto;
                    width: 80%;
                    justify-content: center;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract-content{
                    text-align: center;
                    word-wrap: break-word;
                    font-size: 20px;
                    width: 70%;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
            @media (min-width: 1142px) {
                .container{
                    width:100%;
                }
                .wrapper{
                    grid-gap: 10px;
                    display: grid;
                    justify-items: center;
                    /* grid-template-columns: repeat(575px, 1fr); */
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .datos{
                    text-align: center;
                    width: 100%;
                    font-size: 22px;
                    margin-left: 100px;
                    margin-top: auto;
                    margin-bottom: auto;
                }
                .datos ul{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .datos-image{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 70%;
                    margin-left: 100px;
                }
                .datos-image img{
                    width:100%;
                    border-radius: 50%;
                    align: center;
                    border: 5px solid white;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract{
                    display: grid;
                    grid-template-columns: repeat(365px, 1fr);
                    margin-right: auto;
                    margin-left: auto;
                    width: 80%;
                    justify-content: center;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract-content{
                    text-align: center;
                    word-wrap: break-word;
                    font-size: 20px;
                    width: 90%;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
            @media (min-width: 1503px) {
                .container{
                    width:100%;
                }
                .wrapper{
                    grid-gap: 10px;
                    display: grid;
                    justify-items: center;
                    /* grid-template-columns: repeat(575px, 1fr); */
                    grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .datos{
                    text-align: center;
                    padding-top: 30px;
                    width: 100%;
                    font-size: 20px;
                    grid-column: 4 / 3;
                    justify-content: left;
                }
                .datos ul{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .datos-image{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    grid-column: 2;
                    margin-left: 0px;
                    width: 80%;
                }
                .datos-image img{
                    width:100%;
                    border-radius: 50%;
                    align: center;
                    border: 5px solid white;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract{
                    display: grid;
                    grid-template-columns: repeat(365px, 1fr);
                    margin-right: auto;
                    margin-left: auto;
                    width: 80%;
                    justify-content: center;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .abstract-content{
                    text-align: center;
                    word-wrap: break-word;
                    font-size: 20px;
                    width: 90%;
                    margin-right: auto;
                    margin-left: auto;
                }
            }

            `} </style>

        </div>
    );
export default PersonalData;