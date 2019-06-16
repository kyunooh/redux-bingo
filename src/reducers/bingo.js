const initialBingoBoard = () => {
  const numberArray = [];
  for (let i = 0; i < 25; i++) {
    numberArray.push(i);
  }

  const shuffledArray = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      const randomNumber = numberArray.splice(
        Math.floor(Math.random() * numberArray.length),
        1
      );
      row.push({ randomNumber, checked: false });
    }
    shuffledArray.push(row);
  }

  return shuffledArray;
};

const initialState = {
  boardA: initialBingoBoard(),
  boardB: initialBingoBoard()
};


