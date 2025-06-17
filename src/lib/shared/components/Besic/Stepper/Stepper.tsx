import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Step = styled.div<{ active?: boolean; completed?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;

  .step-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme, active, completed }) =>
      active || completed ? theme.colors.primary : '#ccc'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .step-label {
    margin-top: 8px;
    font-size: 14px;
    color: ${({ theme, active }) => (active ? theme.colors.primary : '#666')};
    transition: color 0.3s;
  }
`;

const StepConnector = styled.div<{ completed?: boolean }>`
  flex-grow: 1;
  height: 2px;
  background-color: ${({ theme, completed }) =>
    completed ? theme.colors.primary : '#ccc'};
  margin: 0 -15px;
  position: relative;
  top: -14px;
  transition: background-color 0.3s;
`;

type StepperProps = {
  steps: string[];
  activeStep: number;
};

export const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <StepperContainer>
      {steps.map((label, index) => (
        <React.Fragment key={label}>
          <Step active={activeStep === index} completed={activeStep > index}>
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{label}</div>
          </Step>
          {index < steps.length - 1 && (
            <StepConnector completed={activeStep > index} />
          )}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
};

export default Stepper;