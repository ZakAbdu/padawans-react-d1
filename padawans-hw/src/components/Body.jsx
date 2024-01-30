import Container from "react-bootstrap/esm/Container"
import Stack from "react-bootstrap/esm/Stack"

import SideBar from "./SideBar"



export default function Body({ sidebar, children }) {

    return (
        <Container>
            <Stack direction='horizontal'>
                { sidebar && <SideBar />}
                <Container className="center-content">
                    { children }
                </Container>
            </Stack>
        </Container>
    )

}
