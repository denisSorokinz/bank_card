const addZeroIfLessThenTen = (numb: number): string => {
    return numb < 10 ? "0" + numb : numb.toString();
}

export default addZeroIfLessThenTen;