import React from "react";


// You can also do - "class UserList extends Component",
// just that you'd have to import React this way -
// import React, {Component} from "react".


export default function UserItem({name, email}) {
	return (
		<div>
			<h1>{name}</h1>
			<h3>{email}</h3>
		</div>
	)
}

