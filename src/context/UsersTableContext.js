import { createContext, useState } from "react";
import { userData } from "../assets/data/usersData";


export const UserTableContext = createContext(null);

export const UserTableContextProvider = ({ children }) => {
    const [tableData, setTableData] = useState(userData);
    const [perPageData, setPerPageData] = useState([])
    return <UserTableContext.Provider value={{ tableData, setTableData, perPageData, setPerPageData }}>
        {children}
    </UserTableContext.Provider>
}