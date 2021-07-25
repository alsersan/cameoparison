export function pick_random(array) {
  const index = Math.floor(array.length * Math.random());
  return array[index];
}

export function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
