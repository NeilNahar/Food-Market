import { useRouteError } from "react-router-dom"

const Error=()=>{
    const error=useRouteError()
    return <div>{error.status}</div>
}
export default Error