import { useParams } from "react-router-dom"
import Body from "../components/Body"

export default function UserPage() {

    const { username } = useParams()

    return(
        <h2>{ username }</h2>
        <Body sidebar>
            {  }
        </Body>
    )
}
