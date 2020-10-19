import { useState } from 'react';
import { BankCardJsxField } from "Entity";

const useDetailsRows = (
    BankCardJsxFields: BankCardJsxField[]
): Array<Array<BankCardJsxField>> => {
    let [lastRowStartIndex, setLastRowStartIndex] = useState(0);
    let [currentFieldIndex, setCurrentFieldIndex] = useState(0);
    const columnSizes = BankCardJsxFields.map((column) => {
        return column.styleAttributes?.columnSize
            ? column.styleAttributes.columnSize
            : 1;
    });
    let rows: [BankCardJsxField[]] = [[]];
    let currentRow = 0;
    let columnSizesSum = 0;
    columnSizes.map((val, index) => {
        columnSizesSum += val;
        if (columnSizesSum == 1) {
            rows[currentRow].push(BankCardJsxFields[index]);
            if (!(index == BankCardJsxFields.length - 1)) rows.push([]);
            currentRow++;
            columnSizesSum = 0;
        } else if (columnSizesSum > 1) {
            currentRow++;
            rows.push([]);
            rows[currentRow].push(BankCardJsxFields[index]);
            columnSizesSum = val;
        } else {
            rows[currentRow].push(BankCardJsxFields[index]);
        }
    });
    return rows;
};

export default useDetailsRows;