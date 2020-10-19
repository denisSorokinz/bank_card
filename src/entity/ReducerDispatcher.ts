import BankCardState from "./BankCardState";
import ReducerAction from "./ReducerAction";

type ReducerDispatcher = (action: ReducerAction, state: BankCardState) => void;

export default ReducerDispatcher;
