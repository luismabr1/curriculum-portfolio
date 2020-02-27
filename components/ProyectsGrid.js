import {Link} from '../routes';

const ProyectsGrid = (props) => {
    const channels = props.channels;
    return (
        <div>
            <h1>Proyectos realizados</h1>
        <div className="channels">
            {
                channels.map((channel) => ( 
                    <Link route="channel" params={{ 
                        id: channel.id
                     }} key={channel.id}>
                        <a className='channel'>
                            <img src={channel.urls.logo_image.original} alt=""/>
                            <h2>{channel.title}</h2>
                        </a>
                    </Link>
                ))
            }

            <style jsx> {`
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                margin-right: 70px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
            }
            .channel img {
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