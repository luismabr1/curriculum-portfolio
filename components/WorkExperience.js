const WorkExperience = () => (
    <div className="container-work">
        <h1>Experiencia laboral</h1>
        <h1> Estudios Realizados </h1> 
            <h2>TItulo de trabajo</h2>
            <span>Durancion</span>
            <span>Lugar</span>
            <p>Descripcion</p>
    
            <style jsx> {`
            .container-work{
                border: 1px solid red;
                margin-right: 70px;
                margin-top:20px;
            }
            `}
            </style>
    </div>
);

export default WorkExperience;