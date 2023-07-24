import React from 'react'
import Card from 'react-bootstrap/Card';
import OfertaRecibidaCards from './OfertaRecibidaCards'
import './OfertaRecibida.css'
import PerfilUser from './Perfil/PerfilUser';
import SettingPerfil from './SettingPerfil/SettingPerfil';
import CardMiniPerfil from './Perfil/CardMiniPerfil/CardMiniPerfil';
import Stars from './Perfil/Stars/Stars';
import UserBannerStatistics from './Perfil/UserBannerStatistics/UserBannerStatistics';
import { Link } from 'react-router-dom';
import PerfilUsuario from './Perfil/PerfilUsuarioConsumeAgustinLorenzi';


const array = [
    { imagen: "imagen1", titulo: "producto1", ubicacion: "ubicacion1" },
    { imagen: "imagen2", titulo: "producto2", ubicacion: "ubicacion2" },
    // { imagen: "imagen3", titulo: "producto3", ubicacion: "ubicacion3" }

]

const OfertaRecibida = () => {
    
    return (

        <div >
            <h3 className='titulo-h3'>¡Recibiste una oferta por tu articulo!.</h3>
            <div className='controlar-cards-recibida'>
                <Card className='cards-recibida'>

                    <Card.Img variant="top" src="" />



                    <Card.Body>
                        <Card.Title className='prod-titulo'>Articulo seleccionado</Card.Title>

                    </Card.Body>
                </Card>


            </div>
            <hr className='hr' />

            <h3 className='titulo-h3'>Te ofrecieron.</h3>

            <div className='ubicar'>
                {array.map(prod => <div key={prod.titulo} className='margin'><OfertaRecibidaCards prod={prod} /></div>)}
            </div>

            <PerfilUsuario/>

           

        </div>
    )
}

export default OfertaRecibida
