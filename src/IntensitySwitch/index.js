import { useCallback, useState } from "react"

export const IntensitySwitch = ({ title, lightIcon, moderateIcon, heavyIcon }) => {
    const [intensity, setIntensity] = useState("off");

    const switchCallback = useCallback(() => {
        switch (intensity) {
            case ("off"):
                return null;
            case ("light"):
                return null;
            case ("moderate"):
                return null;
            case ("heavy"):
                return null;
        }
    })
}