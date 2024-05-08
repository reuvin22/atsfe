import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: [],
    title: null,
    fontColor: null,
    onChange: () => {},
    onClick: () => {},
    onSubmit: () => {}
})

export const TableContext = createContext({
    tableData: null,
    tableHeader: null,
    title: null,
    actions: null
})


export const NavigationContext = createContext({
    onChangeTab: () => {}
})

export const useFormContext = () => useContext(FormContext);
export const useTableContext = () => useContext(TableContext);
export const useNavigationContext = () => useContext(NavigationContext);