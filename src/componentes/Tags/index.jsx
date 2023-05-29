import './Tags.css';
import arvores from '../Galeria/fotos.json';

const Tags = (props) => {
    return (
        <div className='tags'>
            <span>Filtre por: </span>
            <ul>
                {props.tags.map((item) => {
                    return(
                        <li key={item} onClick={() => props.filtro(item)} >{item}</li>
                    )
                })}
                <li onClick={() => props.setar_state(arvores)} >todos</li>
            </ul>
        </div>
    );
}

export default Tags;