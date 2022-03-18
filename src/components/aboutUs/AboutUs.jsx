import React from 'react';
import './AboutUs.css';
import JustNav from '../../components/justNavHeader/JustNav';
import Footer from '../../components/footer/Footer';

function AboutUs() {
	return (
		<>
			<JustNav />

			<section className="aboutUs-section">
				<h1 className="aboutUs-title">Nuestro equipo</h1>
				<div className="aboutUs-container">
					<div className="card">
						<div className="imgBox">
							<img
								src="./resources/images/marco-min.png"
								alt="marco profile"></img>
						</div>
						<div className="details">
							<h4>Marco Muñoz</h4>
							<h5>Especialista en...</h5>
							<p>
								Aquí iría una breve presentación de cada uno de nosotros, así
								como alguna afición o destreza a destacar
							</p>

							<a href="https://www.linkedin.com/in/marco-m-b33a51191/">
								<i className="fab fa-linkedin aboutUsIcons"></i>
							</a>
							<a href="https://www.facebook.com/marco.munozgormedino/">
								<i className="fa-brands fa-github aboutUsIcons"></i>
							</a>
							<a href="https://www.linkedin.com/in/marco-m-b33a51191/">
								<i className="fab fa-instagram-square aboutUsIcons"></i>
							</a>
						</div>
					</div>
					<div className="card">
						<div className="imgBox">
							<img
								src="./resources/images/cesar-min.png"
								alt="cesar profile"></img>
						</div>
						<div className="details">
							<h4>Cesar Alvite</h4>
							<h5>Especialista en...</h5>
							<p>
								Aquí iría una breve presentación de cada uno de nosotros, así
								como alguna afición o destreza a destacar
							</p>
							<i className="fab fa-linkedin aboutUsIcons"></i>
							<i className="fa-brands fa-github aboutUsIcons"></i>
							<i className="fab fa-instagram-square aboutUsIcons"></i>
						</div>
					</div>
					<div className="card">
						<div className="imgBox">
							<img
								src="./resources/images/alex-min.png"
								alt="alex profile"></img>
						</div>
						<div className="details">
							<h4>Alex Coba</h4>
							<h5>Especialista en...</h5>
							<p>
								Aquí iría una breve presentación de cada uno de nosotros, así
								como alguna afición o destreza a destacar
							</p>
							<i className="fab fa-linkedin aboutUsIcons"></i>
							<i className="fa-brands fa-github aboutUsIcons"></i>
							<i className="fab fa-instagram-square aboutUsIcons"></i>
						</div>
					</div>
					<div className="card">
						<div className="imgBox">
							<img
								src="./resources/images/danuti1.png"
								alt="dani profile"></img>
						</div>
						<div className="details">
							<h4>Dani Seco</h4>
							<h5>Especialista en...</h5>
							<p>
								Aquí iría una breve presentación de cada uno de nosotros, así
								como alguna afición o destreza a destacar
							</p>
							<i className="fab fa-linkedin aboutUsIcons"></i>
							<i className="fa-brands fa-github aboutUsIcons"></i>
							<i className="fab fa-instagram-square aboutUsIcons"></i>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default AboutUs;
