import React from "react";
import { Container, ProgressContainer } from "./styles";
import { StepComponent } from "./components/StepComponent";

interface StepsProps {
  steps: string[];
  activeStep: number;
  lastStep: number | null;
}

interface ProgressBarProps {
  status: "inProgress" | "completed" | "empty";
}

export function Steps({ steps, activeStep, lastStep }: StepsProps) {
  function getStatus(index: number): ProgressBarProps["status"] {
    const isStepReady = index + 1 < activeStep;
    const isInProgress = index + 1 === activeStep;

    const status: ProgressBarProps["status"] = isStepReady
      ? "completed"
      : isInProgress
      ? "inProgress"
      : "empty";

    return status;
  }

  return (
    <Container>
      <ProgressContainer>
        {steps.map((stepName, index) => (
          <StepComponent
            key={index}
            index={index}
            isLastStep={index === steps.length - 1}
            numberOfSteps={steps.length}
            status={getStatus(index)}
            stepName={stepName}
            lastStep={lastStep}
          />
        ))}
      </ProgressContainer>
    </Container>
  );
}
