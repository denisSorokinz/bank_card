import { CardNumberLength, CardNumberSpacing } from "Constants";
import { cardNumberType } from "Types";

const getCardNumberToDisplay = (cardNumber: cardNumberType): string => {
    let cardNumberToDisplay = addAsterisksToEnd(cardNumber);
    let cardNumberCharacters = [...cardNumberToDisplay.slice()];
    cardNumberCharacters = addSpacesBetweenCharacters(cardNumberCharacters);
    cardNumberToDisplay = cardNumberCharacters.join("");
    return cardNumberToDisplay;
};

const addAsterisksToEnd = (cardNumber: cardNumberType) => {
    if (cardNumber == null) return "•".repeat(CardNumberLength);
    return (
        cardNumber +
        "•".repeat(CardNumberLength - cardNumber.toString().length)
    );
};

const addSpacesBetweenCharacters = (cardNumberCharacters: string[]) => {
    let index = 0;
    let cardNumberCharactersCopy = cardNumberCharacters.slice();
    // add spaces every [CardNumberSpacing] characters
    while (!(index >= cardNumberCharacters.length - 1)) {
        if (index != 0 && cardNumberCharacters[index] != " ") {
            cardNumberCharactersCopy.splice(index, 0, " ");
            index++;
        }
        index += CardNumberSpacing;
    }
    return cardNumberCharactersCopy;
};

export default getCardNumberToDisplay;
