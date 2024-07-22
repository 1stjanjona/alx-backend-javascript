export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  const iftask = true;
	  const iftask2 = false;

	  task = iftask;
	  task2 = iftask2;
  }

  return [task, task2];
}
