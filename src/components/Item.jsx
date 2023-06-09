import './Item.css'
import Contador from './Contador';

function Card({imagen, nombre, precio,id,categoria}) {
    return (
    <>
        <div className="card">
            <img src={imagen} alt="Rapiditas" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <h4 className="card-title">${precio}</h4>
            <div>
            <Contador/>
            </div>
            <a href="#" className="btn btn-primary">Comprar</a>
            </div>
            <div>
            <button className='btn btn-primary btn-sm'>Ver Detalles</button>
            </div>
        </div>
    </>
    )
}

export default Card