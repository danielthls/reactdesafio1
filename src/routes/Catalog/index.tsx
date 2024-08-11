import './styles.css'
import Header from '../../components/Header'
import CarCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard';
import Footer from '../../components/Footer';

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section id='ct-car-section' className='ct-container'>
                    <div className='ct-title'>
                        <h2>Venha nos visitar</h2>
                    </div>
                    <div className='ct-cards-container'>
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
                <section id='ct-comment-section'>
                    <div className='ct-comment-container'>
                        <div className='ct-title'>
                            <h2>O que estão dizendo</h2>
                        </div>
                        <div className='ct-cards-container'>
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                        </div>
                    </div>
                </section>



            </main>
            <Footer />
        </>
    );
}