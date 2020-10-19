type cardNumber = number;
type expiryDate = Date;
type secureCode = number;
type ownerName = string;

type BankCardFieldTypes =
    cardNumber |
    expiryDate |
    secureCode |
    ownerName;

export {
    BankCardFieldTypes,
    cardNumber as cardNumberType,
    expiryDate as expiryDateType,
    secureCode as secureCodeType,
    ownerName as ownerNameType
};
