import Foto from '../static/FotoLuisBrito.jpg'; 

const PersonalData = () => (


<div className="container">
    <div className="wrapper">
        <div className="image">
            <img src={ Foto }></img>
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
                <p> Frelancer con intereses en los sistemas sociales, dinamica de sistemas, cibernetica e informatica.Desarrollador web con grandes aspiraciones en el area de las ciencias en general y en la informatica en particular.Apasionado a los videojuegos tanto
                    en su programacion y creacion como en su disfrute.
                </p>
            </div>
        </ div>
    <style jsx> { `

            .container{
                width:100%;
            }
            .wrapper{
                grid-gap: 10px;
                display: grid;
                border: 1px solid gray;
                margin-right: 120px;
                background: gray;
                justify-content: center;
                grid-template-columns: repeat(720px, 1fr);
                /* grid-template-columns: repeat(auto-fill, minmax(auto, 3fr)); */
            }
            .datos{
                text-align: center;
                padding-top: 30px;
                width: 100%;
                font-size: 20px;
                
                border: 1px solid pink;

            }
            .datos ul{
                list-style-type: none;
                margin: 0;
                padding: 0;
                justify-text: left;
            }
            .image{
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                border: 1px solid red;
            }

            .image img{
                width:100%;
                border-radius: 50%;
                align: center;
                border: 5px solid white;
            }

            .abstract{
                display: grid;
                grid-template-columns: repeat(365px, 1fr);
            }
            .abstract-content{
                text-align: center;
                width: 100%;
                word-wrap: break-word;
                font-size: 20px;
                border: 1px solid black;
            }

            @media (min-width: 576px) {
                .container{
                    width:100%;
                }
                .wrapper{
                    grid-gap: 10px;
                    display: grid;
                    /* grid-template-columns: repeat(575px, 1fr); */
                    grid-template-columns: repeat(auto-fill, minmax(350px, 3fr));
                }
                .datos{
                    text-align: center;
                    padding-top: 30px;
                    width: 100%;
                    font-size: 20px;
                    justify-content: left;
                }
                .datos ul{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                .image{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 70%;
                }
                .image img{
                    width:100%;
                    border-radius: 50%;
                    align: center;
                    border: 5px solid white;
                }
                .abstract{
                    display: grid;
                    grid-template-columns: repeat(365px, 1fr);
                    justify-items: center;
                }
                .abstract-content{
                    text-align: center;
                    width: 50%;
                    word-wrap: break-word;
                    border: 1px solid red;
                }
              }

            `} </style>

        </div>
    );
export default PersonalData;