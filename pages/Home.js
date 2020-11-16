import 'isomorphic-unfetch';
import Layout from '../components/Layout';
import ProyectsGrid from '../components/ProyectsGrid';
import PersonalData from '../components/PersonalData';
import RealizedStudies from '../components/RealizedStudies';
import WorkExperience from '../components/WorkExperience';
import Error from './_error';

const Home = (props) => {

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
export async function getStaticProps() {
    const res = await fetch('https://curriculum-portfolio-six.vercel.app/api/portfolio')
    const portfolio = await res.json()
    return {
      props: {
        portfolio,
        statusCode: 200
      },
    }
  }

/*  Index.getInitialProps = async ({ res }) => {
    try{
        let req = await fetch('https://curriculum-portfolio-six.vercel.app/api/portfolio');
        
        let {body: portfolio} = await req.json();
        return { portfolio, statusCode: 200 }

    } catch(e){
        res.statusCode = 503
        return { portfolio: null, statusCode: 503 }
    }
}  */


export default Home;