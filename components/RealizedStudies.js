const RealizedStudies = () => (
    <div className = "container-studies" id="studies">
        <h1> Estudios Realizados </h1>
            <div className="studies-information">
                <h3>Ingeniería de Sistema (6 semestres)</h3>
                <span>2012 - 2016</span>
                <span>Barcelona - Venezuela</span>
                <span><b>Universidad de Oriente</b></span>
            </div>

            <div className="studies-information">
                <h3>Tecnico Superior en Informatica</h3>
                <span>2017 - 2019</span>
                <span>Caracas - Venezuela</span>
                <span><b>Instituto Universitario de Mercadotecnia (ISUM)</b></span>
            </div>

            <div className="studies-information">
                <h3>Diplomado en Programacion Web</h3>
                <span>2017</span>
                <span>Caracas - Venezuela</span>
                <span><b>Instituto de Nuevas Tecnologias (UNEWEB)</b></span>
            </div>


        <style jsx > { `
                .container-studies{
                margin-right: 70px;
                margin-top: 20px;
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                }
                .studies-information{
                    display:grid;
                    grid-template-columns: repeat(340px, 1fr);
                    grid-gap: 10px;
                    padding-left: 30px;
                    font-size: 20px;
                    margin-bottom: 30px;
                    
                }
                ` }
        </style>
    </div>
);

export default RealizedStudies;