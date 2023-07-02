export function wait(timeMs: number): Promise<NodeJS.Timeout> {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeMs);
  });
}
