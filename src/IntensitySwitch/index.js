import { useCallback, useState } from "react"
import { Button, Label } from "./styled";

export const IntensitySwitch = ({ title, lightIcon, moderateIcon, heavyIcon }) => {
    const [intensity, setIntensity] = useState("Off");

    const switchCallback = useCallback(() => {
        switch (intensity) {
            case ("Off"):
                return (<Button onClick={() => setIntensity("Light")}>
                    {heavyIcon}
                    <Label>{intensity}</Label>
                </Button>
                );
            case ("Light"):
                return (
                    <Button onClick={() => setIntensity("Moderate")} active>
                        {lightIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            case ("Moderate"):
                return (
                    <Button onClick={() => setIntensity("Heavy")} active>
                        {moderateIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            case ("Heavy"):
                return (
                    <Button onClick={() => setIntensity("Off")} active>
                        {heavyIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            default:
                return (<Button onClick={() => setIntensity("Light")}>
                    {heavyIcon}
                    <Label>{intensity}</Label>
                </Button>
                );
        }
    }, [intensity, lightIcon, moderateIcon, heavyIcon]);

    return (
        <>
            <Label>{title}</Label>
            {switchCallback()}
        </>
    );

};