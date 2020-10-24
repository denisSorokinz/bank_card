import { expiryDateType } from "Types";

const getCardExpiryDateToDisplay = (expiryDate: expiryDateType): string => {
    return expiryDate.toLocaleDateString(undefined, {
        month: "2-digit",
        day: "2-digit",
    });
};

export default getCardExpiryDateToDisplay;
