import './loading.css'
import React from 'react';


const LoadingComponent= () => {
    return (
        <div className='loadingAnimation'>
            <div className='center'></div>
                <section className= 'ring'></section>
                <span className='cargando'>Cargando...</span>
        </div>
    );
}

export default LoadingComponent;