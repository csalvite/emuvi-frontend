import './loading.css'
import React from 'react';


const LoadingComponent= () => {
    return (
        <div>
            <section className='imagenLoading'>
            <video
                autoPlay
                loop
                muted
                src="./resources/videos/loadingEmuvi.mp4"
                className="VLoading">
                Video cannot be loaded :(
                </video>
                <h2>Cargando datos solicitados...</h2>
                
</section>

        </div>
    );
}

export default LoadingComponent;