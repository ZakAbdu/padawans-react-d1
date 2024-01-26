import Container from "react-bootstrap/esm/Container"
import Stack from "react-bootstrap/esm/Stack"

import SideBar from "./SideBar"
import { Movies } from "./movies"


export default function Body({ sidebar, children }) {

    return (
        <Container>
            <Stack direction='horizontal'>
                { sidebar && <SideBar />}
                <Container>
                    { children }
                </Container>
            </Stack>
        </Container>
    )

}
