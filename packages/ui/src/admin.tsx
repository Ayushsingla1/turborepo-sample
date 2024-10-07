import { ReactNode } from "react"

interface adminProps {
    children? : ReactNode
}
export const Admin = ({children} : adminProps)=> {
    return (
        <div>
            hello from admin page
            {children}
        </div>
    )
}