import React from "react";
import { Sidebar } from "./sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar className="w-full md:w-64 md:flex-shrink-0" />
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
