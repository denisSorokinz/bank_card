import { useState } from 'react';
import { BankCardJsxField } from "Entity";

const useDetailsRows = (
    BankCardJsxFields: BankCardJsxField[]
): Array<Array<BankCardJsxField>> => {
    let [lastRowStartIndex, setLastRowStartIndex] = useState(0);
    let [currentFieldIndex, setCurrentFieldIndex] = useState(0);
    const columnWidths = BankCardJsxFields.map((column) => {
        return column.styleAttributes?.columnWidth
            ? column.styleAttributes.columnWidth
            : 1;
    });
    let rows: [BankCardJsxField[]] = [[]];
    let currentRow = 0;
    let columnWidthsSum = 0;
    columnWidths.map((val, index) => {
        columnWidthsSum += val;
        if (columnWidthsSum == 1) {
            rows[currentRow].push(BankCardJsxFields[index]);
            if (!(index == BankCardJsxFields.length - 1)) rows.push([]);
            currentRow++;
            columnWidthsSum = 0;
        } else if (columnWidthsSum > 1) {
            currentRow++;
            rows.push([]);
            rows[currentRow].push(BankCardJsxFields[index]);
            columnWidthsSum = val;
        } else {
            rows[currentRow].push(BankCardJsxFields[index]);
        }
    });
    return rows;
};

export default useDetailsRows;