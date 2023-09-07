function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="" id="logo" src="/midia/imagens/Logos/logo-rt-h.png" alt="Logo H Read-Together" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Meu Clube</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/usuario/editar">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" data-bs-toggle="modal"
                                data-bs-target="#logoutModal">Sair</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
