import { useState } from "react";

const useAddFieldModal = (): [
    isAddFieldModalShown: Boolean,
    toggleIsAddFieldModalShown: () => void
] => {
    const [isAddFieldModalShown, setIsAddFieldModalShown] = useState(false);
    const toggleIsAddFieldModalShown = () =>
        setIsAddFieldModalShown(!isAddFieldModalShown);
    return [isAddFieldModalShown, toggleIsAddFieldModalShown];
};

export default useAddFieldModal;
