import { ProtectedRoutePhoneWarning, ProtectedRouteTechWork } from "@/pages/protected-route";
import { store } from "@/store";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0
        },
    },
})

export const Root: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        // <React.StrictMode>
        // <HookFormProvider>
        <ProtectedRoutePhoneWarning>
            <ProtectedRouteTechWork>


                <QueryClientProvider client={queryClient}>
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