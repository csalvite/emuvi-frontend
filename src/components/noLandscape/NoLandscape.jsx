import React from 'react';
import './NoLandscape.css';

function NoLandscape() {
	return (
		<>
			<div id="landscape">
				<div>
					<p>
						<i className="fa-solid fa-mobile-screen-button fa-beat-fade landscapeIcon"></i>
						<br></br>
						Por favor, gira el móvil para visualizar el contenido.
					</p>
				</div>
			</div>
		</>
	);
}

export default NoLandscape;
