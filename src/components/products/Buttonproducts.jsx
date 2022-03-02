import React from 'react';

function Buttonproducts({ prevPage, nextPage }) {
	return (
		<div id="pagination_container">
			<button className="prev-btn" onClick={prevPage}>
				Anteriores
			</button>
			&nbsp;
			<button className="next-btn" onClick={nextPage}>
				Siguientes
			</button>
		</div>
	);
}

export default Buttonproducts;
