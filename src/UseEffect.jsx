import { useEffect, useState } from "react";

export default function UseEffectComponent() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }
    }, [])
    useEffect(() => {
        document.title = "Size " + width + " X " + height
    }, [width, height])
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return <div>

        <p>Width: {width}</p> <br />
        <p>Height: {height}</p>

    </div>
}
