import { Fragment } from "react";//Replacement of div

function ListGroup() {
	const items = [
		'Japan',
		'Tokyo',
		'London',
		'Paris',
		'Singapore'
	];

	//Converting them all to an <li> Element "30:52".
	items.map(item => <li>{item}</li>);

	return (
		//<h1>A component cannot return more than one element</h1>
		<Fragment>
			<h1>List</h1>
				<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
				</ul>
		</Fragment>
	);
}

export default ListGroup;
