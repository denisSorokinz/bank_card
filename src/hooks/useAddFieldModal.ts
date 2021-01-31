import { useState } from "react";
import { BankCardJsxFieldCustom } from "Entity";

type emptyArray = [];
const useAddFieldModal = (): {
    isAddFieldModalShown: Boolean;
    toggleIsAddFieldModalShown: () => void;
    customFields: BankCardJsxFieldCustom[] | emptyArray;
    setCustomFields: React.Dispatch<
        React.SetStateAction<BankCardJsxFieldCustom[] | emptyArray>
    >;
} => {
    const [isAddFieldModalShown, setIsAddFieldModalShown] = useState(false);
    const toggleIsAddFieldModalShown = () =>
        setIsAddFieldModalShown(!isAddFieldModalShown);
    const [customFields, setCustomFields] = useState<
        BankCardJsxFieldCustom[] | emptyArray
    >([]);
    return {
        isAddFieldModalShown,
        toggleIsAddFieldModalShown,
        customFields,
        setCustomFields,
    };
};

export default useAddFieldModal;
