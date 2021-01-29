import { ReducerActions } from "Constants";

interface ReducerAction {
    type: ReducerActions;
    payload: string;
}

export default ReducerAction;
