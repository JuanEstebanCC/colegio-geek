import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"
import "../styles/pantallasPrincipales.css";

const Administrador = () => {
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar 
                        name1="Nuevo registro"
                        name2="Profesores"
                        name3="Estudiantes"
                        name4="Grupos"
                        name5="Materias"
                        name6="Generar Reportes"
                        ruta1="/administrador"
                        ruta2="/ver_profesores_administrador"
                        ruta3="/ver_estudiantes_administrador"
                        ruta4="/ver_grupos_administrador"
                        ruta5="/ver_materias_administrador"
                        ruta6="/generar_reportes_administrador"
                    />
                </div>
                <div class="PM">
                    <div className="mt-4">
                        <div className="main align-middle d-flex pl-4 pr-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <Card name="Registrar estudiante" ruta="/registrar_estudiante"/>
                                </div>
                                <div class="col-sm-6 ">
                                    <Card name="Registrar profesor" ruta="/registrar_profesor"/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Registrar grupo" ruta="/registrar_grupo"/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Registrar materia" ruta="/registrar_materia"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

        <Footer cargo="Administrador"/>
        </div>
    );
};

export default withRouter(Administrador);