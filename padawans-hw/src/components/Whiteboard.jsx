import { useState } from "react"
import Container from "react-bootstrap/esm/Container"


export default function Whiteboard() {

    const [performingStudent, setPerformingStudent] = useState()


    const students = [
        'parker',
        'zakaria',
        'justin',
        'mike',
        'catrina',
        'emiliano',
        'cameron',
        'johnny'
    ]

    function randomStudent() {
        setPerformingStudent( students[Math.floor(Math.random() * students.length)] )
        console.log(performingStudent)

    }


    return (
        <Container>
            <h3>Today's Whiteboard</h3>
            <p>Student: {performingStudent}</p>
            <button onClick={randomStudent}>Spin The Wheel</button>
        </Container>
    )
}
