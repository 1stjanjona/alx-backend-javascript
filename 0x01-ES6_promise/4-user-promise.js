export default function signUpUser(firstName, lastName) {
	const my Promise = new Promise((resolve) => {
		resolve (
			{ firstName, lastName },
		);
	});
	return myPromise;
}
