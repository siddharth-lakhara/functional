async function loadUsers(userIds, load, done) {
	let users = [];
	for (let i = 0; i < userIds.length; i++) {
    let userElem = await(load(userId[i]));
    users.push(userElem);
	}
	return users;
}

module.exports = loadUsers;
