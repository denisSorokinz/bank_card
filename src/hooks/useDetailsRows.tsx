import { useState } from "react";
import { BankCardJsxFieldStandard } from "Entity";

const useDetailsRows = (
    BankCardJsxFields: BankCardJsxFieldStandard[]
): Array<Array<BankCardJsxFieldStandard>> => {
    const columnWidths = BankCardJsxFields.map((column) => {
        return column.styleAttributes?.columnWidth
            ? column.styleAttributes.columnWidth
            : 1;
    });
    let rows: [BankCardJsxFieldStandard[]] = [[]];
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
