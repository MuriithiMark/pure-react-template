import { useEffect, useState } from "react";
import "../styles/interactive.css";

export default function LoadingComponent() {
    const [degrees, setDegress] = useState(0);

    useEffect(() => {
        const moveSpinner = async () => setInterval(async () => {
            const newDegree = degrees < 360 ? (degrees + 10) : 0;
            setDegress(newDegree);
        }, 100);

        moveSpinner();
    }, [degrees])

    return (
        <div class="interactive loading">
            <div className="outer-circle" style={{ transform: `rotate(${degrees}deg)` }}>
                <div className="inner-circle"></div>
                <div className="inner-circle"></div>
            </div>
        </div>
    )
}