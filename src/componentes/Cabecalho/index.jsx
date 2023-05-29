import './Cabecalho.css'

const Cabecalho = (props) => {
    return ( 
        <header className='cabecalho'>
            <img src="/assets/imgs/logo.png" alt="logo de arvore com tronco e pequenas folhas" />
            <div>
                <h1>Season Trees</h1>
            </div>
        </header>
     );
}
 
export default Cabecalho;