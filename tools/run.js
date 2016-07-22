function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();
  console.log(
    `[${format(start)}] Starting '${task.name}${options ? `(${options})` : ''}'...`
  );
  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(
      `[${format(end)}] Finished '${task.name}${options ? `(${options})` : ''}' after ${time} ms`
    );
  });
}

export default run;
