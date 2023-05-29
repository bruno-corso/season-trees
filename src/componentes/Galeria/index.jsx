import { useState } from 'react'
import Tags from '../Tags'
import './Galeria.css'
import arvores from './fotos.json'
import { AiOutlineHeart } from 'react-icons/ai'
import Curtidas from '../Curtidas'

const Galeria = () => {
    const [itens, setArvores] = useState(arvores);
    const [curtidas, setCurtidas] = useState([]);
    const tags = [... new Set(arvores.map((arvore) => arvore.tag))]

    function curtiu(arvore) {
        {alert("Você curtiu essa árvore!")}
        setCurtidas([...curtidas, arvore])
    }

    function filtrar_tag(tag) {
        const novasArvores = arvores.filter((arvore) => {
            return arvore.tag === tag;
        })
        setArvores(novasArvores);
    }

    return (
        <div>
            <Tags tags={tags} filtro={filtrar_tag} setar_state={setArvores} />
            <div className='galeria'>
                <ul>
                    {itens.map((item) => {
                        return (
                            <li key={item.nome}>
                                <div className='container'>
                                    <img src={item.local} alt={item.nome} />
                                </div>
                                <div className='descricao'>
                                    <span>{item.nome}</span>
                                    <div onClickCapture={() => curtiu(item)}>
                                        <AiOutlineHeart className='heart' />
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Curtidas curtidas={curtidas} setCurtidas={setCurtidas} />
        </div>
    );
}

export default Galeria;