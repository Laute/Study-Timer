import { Step, Stepper, StepLabel } from "@mui/material";

const StepperComponent = ({ index }) => {

    

    return(
        <Stepper activeStep={index} alternativeLabel={true}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
    );
}

export default StepperComponent;
