import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: [],
    title: null,
    fontColor: null,
    onClick: () => {},
    onSubmit: () => {}
})

export const TableContext = createContext({
    tableData: null,
    tableHeader: null
})

export const NavigationContext = createContext({
    navigate: null
})
export const useFormContext = () => useContext(FormContext);
export const useTableContext = () => useContext(TableContext);
export const useNavigationContext = () => useContext(NavigationContext);