import { BankCardNumberLength, BankCardNumberSpacing } from "Constants";

const getCardNumberWithAsterisks = (currentCardNumber: string): string => {
    let cardNumberWithAsterisks = addAsterisksToEnd(currentCardNumber);
    let cardNumberCharacters = [...cardNumberWithAsterisks.slice()];
    cardNumberCharacters = addSpacesBetweenCharacters(cardNumberCharacters);
    cardNumberWithAsterisks = cardNumberCharacters.join("");
    return cardNumberWithAsterisks;
};

const addAsterisksToEnd = (currentCardNumber: string) => {
    return (
        currentCardNumber +
        "*".repeat(BankCardNumberLength - currentCardNumber.length)
    );
};

const addSpacesBetweenCharacters = (cardNumberCharacters: string[]) => {
    let index = 0;
    let cardNumberCharactersCopy = cardNumberCharacters.slice();
    // add spaces every [BankCardNumberSpacing] characters
    while (!(index >= cardNumberCharacters.length - 1)) {
        if (index != 0 && cardNumberCharacters[index] != " ") {
            cardNumberCharactersCopy.splice(index, 0, " ");
            index++;
        }
        index += BankCardNumberSpacing;
    }
    return cardNumberCharactersCopy;
};

export default getCardNumberWithAsterisks;
