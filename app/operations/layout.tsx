import SideBar from "../components/sidebar"

export default function OperationsLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <div className="flex flex-row h-full">
            <SideBar></SideBar>
            {children}
        </div>
    )
}