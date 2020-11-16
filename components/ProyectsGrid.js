import {Link} from '../routes';

const ProyectsGrid = (props) => {
    const proyects = props.portfolio;
    console.log(props)
    return (
        <div id="portfolio">
            <h1>Proyectos realizados (aun en desarrollo... Estos son datos de prueba...)</h1>
        <div className="proyects">
            {
                proyects.map((proyect) => ( 
                    <Link route="proyect" params={{ 
                        id: proyect.id
                     }} key={proyect.id}>
                        <a className='proyect'>
                            <img src={proyects.image_url} alt=""/>
                            <h2>{proyect.name}</h2>
                        </a>
                    </Link>
                ))
            }

            <style jsx> {`
            .proyects {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                margin-right: 70px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.proyect {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
            }
            .proyect img {
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                width: 100%;
            }
            h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
            }
            `}
            </style>
        </div>
        </div>

        
     );
}
 
export default ProyectsGrid;