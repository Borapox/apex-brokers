import { useState } from "react";

export function userForm(steps: any[]) {

    const [currentSteps, setCurrentSteps] = useState(0)

    return {
        currentSteps,
        currentComponent: steps[currentSteps]
    }
}