import React from 'react';

const UserCard = ({ user }) => {
	return (
		<div>
			{user.name.title} {user.name.last} {user.name.title}
		</div>
	);
};

export default UserCard;
