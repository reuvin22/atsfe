import { createContext, useContext } from "react";

export const FormContext = createContext({
    ref: null,
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
    actions: null,
    onClick: () => {}
})
export const LoginContext = createContext({
    state: null
})


export const NavigationContext = createContext({
    onChangeTab: () => {}
})

export const useModalContext = () => useContext(ModalContext);
export const useLoginContext = () => useContext(LoginContext);
export const useFormContext = () => useContext(FormContext);
export const useTableContext = () => useContext(TableContext);
export const useNavigationContext = () => useContext(NavigationContext);