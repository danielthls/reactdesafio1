import './styles.css';
import carImg from '../../assets/carro.png';

export default function CarCard() {
    return (
        <div className='ct-car-card'>
            <img src={carImg} alt="Carro" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    );
}