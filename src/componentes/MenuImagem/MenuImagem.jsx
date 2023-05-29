import Banner from '../Banner/Banner';
import Menu from '../Menu';
import './MenuImagem.css'

const MenuImagem = (props) => {
    return (
    <section className='menuimagem'>
        <Menu />
        <Banner />
    </section>    
    );
}

export default MenuImagem;