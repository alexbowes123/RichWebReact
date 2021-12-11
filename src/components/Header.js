import PropTypes from 'prop-types';

const Header = ({ title}) =>{
    return(
        <header>
            <b>{title}</b>
        </header>
    )
}

Header.defaultProps ={
    title: 'Note Taking App - REACT EDITION'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header