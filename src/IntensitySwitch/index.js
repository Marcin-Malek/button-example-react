import { useCallback, useState } from "react"
import { Button, Label } from "./styled";

export const IntensitySwitch = ({ title, lightIcon, moderateIcon, heavyIcon }) => {
    const [intensity, setIntensity] = useState("off");

    const switchCallback = useCallback(() => {
        switch (intensity) {
            case ("off"):
                return (<Button onClick={() => setIntensity("light")}>
                    {heavyIcon}
                    <Label>{intensity}</Label>
                </Button>);
            case ("light"):
                return (
                    <Button onClick={() => setIntensity("moderate")} active>
                        {lightIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            case ("moderate"):
                return (
                    <Button onClick={() => setIntensity("heavy")} active>
                        {moderateIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            case ("heavy"):
                return (
                    <Button onClick={() => setIntensity("off")} active>
                        {heavyIcon}
                        <Label>{intensity}</Label>
                    </Button>
                );
            default:
                return (<Button onClick={() => setIntensity("light")}>
                    {heavyIcon}
                    <Label>{intensity}</Label>
                </Button>);
        }
    }, [intensity, lightIcon, moderateIcon, heavyIcon])
    return (
        <>
            <Label>{title}</Label>
            {switchCallback()}
        </>
    );

};