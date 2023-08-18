/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const context = createContext();
function AppContext({ children }) {
    const [state, setState] = useState({ dark: false })
    return <context.Provider value={{ state, setState }}>{children}</context.Provider>
}

export default AppContext
export { context };