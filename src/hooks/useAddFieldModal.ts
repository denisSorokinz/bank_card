import { useState } from "react";

const useAddFieldModal = (): [
    isAddFieldModalShown: Boolean,
    toggleIsAddFieldModalShown: (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
] => {
    const [isAddFieldModalShown, setIsAddFieldModalShown] = useState(false);
    const toggleIsAddFieldModalShown = (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        ev.preventDefault();
        setIsAddFieldModalShown(!isAddFieldModalShown);
    };
    return [isAddFieldModalShown, toggleIsAddFieldModalShown];
};

export default useAddFieldModal;
