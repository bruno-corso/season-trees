import './Menu.css'

const Menu = (props) => {
    return ( 
        <nav className='menu'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Mais Curtidas</a></li>
                <li><a href='#'>Mais Vistas</a></li>
                <li><a href='#'>Novas Imagens</a></li>
                <li><a href='#'>Surpreenda-me</a></li>
            </ul>
        </nav>
     );
}
 
export default Menu;