function guardrail(mathFunction) {
	const queue = [];

	try {
		queue.push(mathFunction());
	} catch (err) {
		queue.push(err.toSTring());
	} finally {
		queue.push('Guardrail was processed');
	}
	return queue;
}
