import { expiryDateType } from "Types";

const getCardExpiryDateToDisplay = (expiryDate: expiryDateType): string => {
    if (expiryDate == null) return "";
    return expiryDate.toLocaleDateString(undefined, {
        month: "2-digit",
        day: "2-digit",
        year:
            expiryDate.getFullYear() == new Date().getFullYear()
                ? undefined
                : "numeric",
    });
};

export default getCardExpiryDateToDisplay;
