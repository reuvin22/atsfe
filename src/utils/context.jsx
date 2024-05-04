import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: [],
    title: null,
    onClick: () => {},
    onSubmit: () => {}
})

export const TableContext = createContext({
    tableData: null,
    tableHeader: null
})

export const useFormContext = () => useContext(FormContext);
export const useTableContext = () => useContext(TableContext);