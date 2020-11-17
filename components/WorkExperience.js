const WorkExperience = () => (
    <div className="container-work" id="works">
            <h1>Experiencia laboral</h1>
        <div className="work-information">
                <h2>World Tel-Fax Electronics</h2>
                <span><b>Analista de Soporte Tecnico</b></span>
                <span>Diciembre 2017 - actualidad</span>
                <span>Baruta. Edo - Miranda</span>
                <p><i>Mantenimiento físico de equipos de callcenter, atender requerimientos para equipos de computación, impresoras y otros dispositivos periféricos, Prestar asistencia técnica en la instalación y mantenimiento preventivo y correctivo de los equipos de computación y realizar la reparación de hardware o software, peinado de nichos, mantenimientos de sala de servidores, realización de pruebas de líneas telefónicas y de SMS, monitoreo de servicios y servidores tanto físicos como virtuales.</i></p>
        </div>

        <div className="work-information">
                <h2>MOVENU Internacional</h2>
                <span>Desarrollador Web</span>
                <span>Marzo 2017 - actualidad</span>
                <span>Caracas</span>
                <p><i>Creación y actualización de página web oficial, creación de base de datos y aplicación web para el proceso de inscripciones en php, asesoría en el uso, gestión y administración de la aplicación. Configuración de subdominios e instalación de plantillas en Wordpress para blog y galería.</i></p>
        </div>

            <style jsx> {`
            .container-work{
                display: grid;
                width:100%;
                margin-right: 70px;
                margin-top:20px;
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            }
            .work-information{
                display:grid;
                grid-template-columns: repeat(340px, 1fr);
                grid-gap: 10px;
                padding-left: 30px;
                font-size: 20px;
            }
            `}
            </style>
    </div>
);

export default WorkExperience;