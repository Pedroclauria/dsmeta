import logo from '../../assets/img/malandro.svg'
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Malandro Serginho e Eu</h1>
        <p>
          Desenvolvido por
          <a href="https://www.pudim.com.br"> @pudim.com.br</a>
        </p>
      </div>
    </header>
  )
}

export default Header