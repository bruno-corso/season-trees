import './Curtidas.css'

const Curtidas = ({ curtidas, setCurtidas }) => {
    return (
        <div>
            <h2>Fotos Curtidas...</h2>
            <div className='curtidas'>
                <ul>
                    {curtidas.map((item) => {
                        return (
                            <li key={item.nome}>
                                <div className='container'>
                                    <img src={item.local} alt={item.nome} />
                                </div>
                                <div className='descricao'>
                                    <span>{item.nome}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => setCurtidas([])} >Reset</button>
            </div>
        </div>
    );
}

export default Curtidas;