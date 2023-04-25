export const error = (message?: string): never => {
  throw new Error(message);
};

export const repeat = (times: number, block: (index: number) => void) => {
  for (let index = 0; index < times; index++) {
    block(index + 1);
  }
};
