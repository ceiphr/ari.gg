// https://stackoverflow.com/a/7228322/9264137

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default random;
