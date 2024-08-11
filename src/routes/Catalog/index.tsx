import './styles.css'
import Header from '../../components/Header'
import CarCard from '../../components/CarCard';

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section id='ct-car-section' className='ct-container'>
                    <div className='ct-car-title'>
                        <h1>Venha nos visitar</h1>
                    </div>
                    <div className='ct-car-cards-container'>
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
            </main>
        </>
    );
}