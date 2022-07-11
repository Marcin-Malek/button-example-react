import { useCallback, useState } from "react"
import { Button, Title } from "./styled";

export const IntensitySwitch = ({ title, lightIcon, moderateIcon, heavyIcon }) => {
    const [intensity, setIntensity] = useState("off");

    const switchCallback = useCallback(() => {
        switch (intensity) {
            case ("off"):
                return <Button onClick={() => setIntensity("light")}>{heavyIcon}</Button>;
            case ("light"):
                return <Button onClick={() => setIntensity("moderate")}>{lightIcon}</Button>;
            case ("moderate"):
                return <Button onClick={() => setIntensity("heavy")}>{moderateIcon}</Button>;
            case ("heavy"):
                return <Button onClick={() => setIntensity("off")}>{heavyIcon}</Button>;
            default:
                return <Button onClick={() => setIntensity("light")}>{heavyIcon}</Button>;
        }
    }, [intensity, lightIcon, moderateIcon, heavyIcon])
    return (
        <>
            <Title>{title}</Title>
            {switchCallback()}
        </>
    );

};