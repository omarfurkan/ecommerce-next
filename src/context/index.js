'use client'

import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
    const [shwoNavModal, setShowNavModal] = useState(false)
    return <GlobalContext.Provider value={{ shwoNavModal, setShowNavModal }}>{children}</GlobalContext.Provider>
}

