import './styles.css';
import { ReactComponent as Youtube } from './youtube.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Instagram } from './instagram.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior / <b>Maike Naysinger Borges</b>
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new" className="youtube">
                    <Youtube />

                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new" className="linkedin">
                    <Linkedin />
              
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new" className="instagram">
                    <Instagram />

                </a>

            </div>

        </footer>
    )

}

export default Footer;