
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle } ) => {

    
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </>
    );
}

FirstApp.propTypes  = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    name: 'Sergio Pimiento',
    title: 'No hay ningún título',
    subTitle: 'No tengo un sub-título'
};