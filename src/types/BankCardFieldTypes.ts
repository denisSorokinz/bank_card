type cardNumber = number | null;
type expiryDate = Date | null;
type secureCode = number | null;
type ownerName = string | null;

type BankCardFieldTypes =
    cardNumber |
    expiryDate |
    secureCode |
    ownerName |
    null;

export {
    BankCardFieldTypes,
    cardNumber as cardNumberType,
    expiryDate as expiryDateType,
    secureCode as secureCodeType,
    ownerName as ownerNameType
};
