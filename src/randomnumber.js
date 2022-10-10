const getRandomNumber = (minimum = 0, maximum = 100) => Math.floor(Math.random() * (maximum - minimum) + minimum);

export default getRandomNumber;
