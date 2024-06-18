import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
	const [brandVisible, setBrandVisible] = useState(false);
	const [typeVisible, setTypeVisible] = useState(false);
	const [productVisible, setProductVisible] = useState(false);

	const [serviceEntries, setServiceEntries] = useState([]);

	useEffect(() => {
		const entries = JSON.parse(localStorage.getItem("serviceEntries")) || [];
		setServiceEntries(entries);
	}, []);

	return (
		<Container className="d-flex flex-column" style={{ margin: "15rem auto 18rem auto" }}>
			<Button
				variant="outline-light"
				onClick={() => setTypeVisible(true)}
				className="mt-3 p-2"
				style={{
					boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
					background: "#5C5C5C",
					border: "0.5px solid #FFF",
					borderRadius: "7px",
				}}
				type="submit"
			>
				Добавить тип
			</Button>
			<Button
				variant="outline-light"
				onClick={() => setBrandVisible(true)}
				className="mt-3 p-2"
				style={{
					boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
					background: "#5C5C5C",
					border: "0.5px solid #FFF",
					borderRadius: "7px",
				}}
				type="submit"
			>
				Добавить бренд
			</Button>
			<Button
				variant="outline-light"
				onClick={() => setProductVisible(true)}
				className="mt-3 p-2 mb-5"
				style={{
					boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
					background: "#5C5C5C",
					border: "0.5px solid #FFF",
					borderRadius: "7px",
				}}
				type="submit"
			>
				Добавить товар
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
			<CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />

			<Table striped bordered hover variant="dark" className="mt-5">
				<thead>
					<tr>
						<th>Имя</th>
						<th>Email</th>
						<th>Дата</th>
						<th>Услуга</th>
					</tr>
				</thead>
				<tbody>
					{serviceEntries.map((entry, index) => (
						<tr key={index}>
							<td>{entry.name}</td>
							<td>{entry.email}</td>
							<td>{entry.date}</td>
							<td>{entry.service}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Admin;
