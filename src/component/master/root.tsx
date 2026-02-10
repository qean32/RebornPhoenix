import { ProtectedRoutePhoneWarning, ProtectedRouteTechWork } from "@/pages/protected-route";
import { store } from "@/store";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";

export const Root: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        // <React.StrictMode>
        // <HookFormProvider>
        <ProtectedRoutePhoneWarning>
            <ProtectedRouteTechWork>


                <QueryClientProvider client={new QueryClient({})}>
                    <Provider store={store} >
                        {children}
                    </Provider>
                </QueryClientProvider >
            </ProtectedRouteTechWork >
        </ProtectedRoutePhoneWarning>
        // </HookFormProvider>
        // </React.StrictMode>,
    )
}