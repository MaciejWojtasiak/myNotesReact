import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy;Maciej Wojtasiak {currentYear}</p>
        </footer>
    );
};

export default Footer;