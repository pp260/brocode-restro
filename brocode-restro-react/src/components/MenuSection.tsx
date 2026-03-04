import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <div style={{ padding: "20px" }}>{children}</div>
        </>
    );
}

export default Layout;