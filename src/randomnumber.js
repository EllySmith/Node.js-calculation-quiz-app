const getRandomNumber = (minimum, maximum) => {
  const randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
  return randomNumber;
};

export default getRandomNumber;
