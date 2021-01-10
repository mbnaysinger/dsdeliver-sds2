import './styles.css';
function StepsHeader() {
    return (
        <header className="order-steps-container">
            <div className="order-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        selecione os produtos e localização.
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Depois clique em <strong>ENVIAR PEDIDO</strong>.
                    </li>
                </ul>
            </div>
        </header>
    )

}

export default StepsHeader;