import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextDatasProvider from "./contexts/ContextDatasProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ContextDatasProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </React.StrictMode>
  </ContextDatasProvider>
);
