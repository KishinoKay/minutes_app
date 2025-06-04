import {Link} from 'react-router-dom';
const Header = () => {
    return <header>
        <nav>
        <Link to="/">Upload</Link> | <Link to="/Load">Load</Link> | <Link to="/Load/Result">Result</Link>
        </nav>
        </header>;
};

export default Header;