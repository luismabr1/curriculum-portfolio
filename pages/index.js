import 'isomorphic-unfetch';
import Layout from '../components/Layout';
import ProyectsGrid from '../components/ProyectsGrid';
import PersonalData from '../components/PersonalData';
import RealizedStudies from '../components/RealizedStudies';
import WorkExperience from '../components/WorkExperience';
import Error from './_error';

const Index = (props) => {

    const {portfolio, statusCode} = props;
    
    if(statusCode !== 200){
        return <Error statusCode={statusCode} />
    } 
    return ( 
        <Layout title="Luis Brito CV">

            <PersonalData />

            <RealizedStudies />

            <WorkExperience /> 
  
            <ProyectsGrid portfolio={portfolio} />

        </Layout>
    );

}

 Index.getInitialProps = async ({ res }) => {
    try{
        let req = await fetch('https://curriculum-portfolio-eight.vercel.app/api/portfolio');
        
        let portfolio = await req.json();
        return { portfolio, statusCode: 200 }

    } catch(e){
        res.statusCode = 503
        return { portfolio: null, statusCode: 503 }
    }
}  


export default Index;

/* import { fonts, colors, breakpoints } from "../styles/themes.js";
import { addOpacityToColor } from "../styles/utils";
import Foto from '../static/FotoLuisBrito.jpg';
 
const Index = () => {
    return ( 
        <>
        <div className="container">
            <main>
                <div className="datos-image">
                    <img src={Foto}></img>
                </div>
                <h1>Luis Manuel Brito</h1>
                <h1>Desarrollador Web junior</h1>
                <h1>Bienvenido!</h1>

                <button>Entrar</button>
            </main>
        </div>
        <style jsx>
            {`
                      .container {
                        display: grid;
                        height: 100vh;
                        place-items:center;
                      } 
                      main {
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                        height: 100%;
                        width: 100%;
                      }
                      button{
                        background-color: #e7e7e7; 
                        color: black;
                        border: none;
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                      }
            
                    .datos-image{
                        margin-left: auto;
                        margin-right: auto;
                        width: 50%;
                    }
        
                    .datos-image img{
                        width:100%;
                        border-radius: 50%;
                        align: center;
                        border: 5px solid white;
                    }
                    @media (min-width: ${breakpoints.mobile}) {
                        main {
                          height: 90vh;
                          width: ${breakpoints.mobile};
                        }
                      }
            `}
        </style>
        </>
     );
}
 
export default Index; */