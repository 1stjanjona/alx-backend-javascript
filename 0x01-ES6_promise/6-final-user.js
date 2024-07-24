import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
	const userData = await signUpUser(firstName, lastName).then((data) => ({
		status: 'fulfilled',
		value: data,
	}));

	const fileData = await uploadPhoto(fileName).catch((err) => ({
		status: 'rejected',
		value: err.toString(),
	}));

	return Promise.resolve([userData, fileData]);
}
