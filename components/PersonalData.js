import Foto from '../static/FotoLuisBrito.jpg';
const PersonalData = () => (
    <div className="container" id="datos">
        <h1>Datos Personales</h1>
        <ul>
            <li>Nombre: Luis Manuel</li>
            <li>Apellido: Brito Romero</li>
            <li>Telefono: +58 414 092.96.37</li>
            <li>Direccion: Charallave -Edo. Miranda</li>
            <li>Email: lsbrt4@gmail.com</li>
        </ul>

        <img src={Foto}></img>
    
            <style jsx> {`
            .container{
                border: 1px solid red;
                margin: 20px;
            }
            .container ul{
                padding: 50px;
            }
            .container img{
                width: 250px;
                border-radius: 50%;
                align: center;
            }

            `}
            </style>
    </div>
);

export default PersonalData;