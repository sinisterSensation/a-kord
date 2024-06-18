import React from "react";
import { Card, Container } from "react-bootstrap";

const Contacts = () => {
	return (
		<Container style={{ marginTop: 90 }}>
			<h2 style={{ marginLeft: 30 }}>Контакты</h2>
			<Card
				id="contacts-media"
				style={{ background: "rgb(50, 51, 56)", borderRadius: 14 }}
				className="mt-4 d-flex justify-content-around align-items-center flex-row p-5"
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35585.874771384326!2d47.22295122345954!3d56.12049088895671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415a3795e45e0e67%3A0x928e2a012cf027e7!2z0JAt0JrQvtGA0LQ!5e0!3m2!1sru!2sru!4v1708264545205!5m2!1sru!2sru"
					width="550"
					height="450"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					style={{ border: 0, borderRadius: 28 }}
				></iframe>
				<div style={{ color: "white", fontSize: 25 }}>
					<p>Телефон: +79520253411</p>
					<p>
						Адрес: улица Космонавта
						<br />
						Николаева, 14А, Чебоксары,
						<br /> Чувашская Република, 428003
					</p>
					<p>Часы работы: 8:00-18:00</p>
				</div>
			</Card>
			<h2 style={{ marginLeft: 30, marginTop: 50 }}>О нас</h2>
			<Card
				id="contacts-media"
				style={{ background: "rgb(50, 51, 56)", borderRadius: 14, marginBottom: 90 }}
				className="mt-4 d-flex justify-content-around align-items-center flex-row p-5"
			>
				<div style={{ color: "white", fontSize: 20 }}>
					Наш сервис шиномонтажа А-Корд в Чебоксарах предоставляет профессиональные услуги по замене и ремонту
					шин на любой тип автомобиля. Мы обладаем богатым опытом и квалифицированным персоналом, который
					гарантирует качественное обслуживание и безопасность вашего транспортного средства.
					<br />
					<br />
					У нас вы можете быстро и удобно заменить шины, провести балансировку и ремонт колес. Мы работаем с
					самыми современными оборудованием и используем проверенные и качественные материалы.
					<br />
					<br />
					Мы ценим своих клиентов и всегда готовы предложить им высокий уровень сервиса, доступные цены и
					индивидуальный подход. Обращайтесь в наш сервис шиномонтажа А-Корд и наслаждайтесь комфортом и
					безопасностью на дорогах!
				</div>
			</Card>
		</Container>
	);
};

export default Contacts;
