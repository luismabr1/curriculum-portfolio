import 'isomorphic-unfetch';
import Layout from '../components/Layout';
import ProyectsGrid from '../components/ProyectsGrid';
import PersonalData from '../components/PersonalData';
import RealizedStudies from '../components/RealizedStudies';
import WorkExperience from '../components/WorkExperience';
import Error from './_error';

const Index = (props) => {

    const {channels, statusCode} = props;
    if(statusCode !== 200){
        return <Error statusCode={statusCode} />
    }
    return ( 
        <Layout title="Podcats">

            <PersonalData />

            <RealizedStudies />

            <WorkExperience /> 
  
            <ProyectsGrid channels={channels} />

        </Layout>
    );

}

Index.getInitialProps = async ({ res }) => {
    try{
        let req = await fetch('https://api.audioboom.com/channels/recommended');
        let {body: channels} = await req.json();
    
        return { channels, statusCode: 200 }

    } catch(e){
        res.statusCode = 503
        return { channel: null, statusCode: 503 }
    }
}


export default Index;