import react from 'react';
import loaderSrc from '../../assets/ZZ5H.gif';

const Loader = props => (
    <div>
        <img
            style={{width: 30}}
            alt = 'Loader icon'
            src={loaderSrc}
        />
    </div>
)

export default Loader;