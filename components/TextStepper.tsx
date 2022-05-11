import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme, MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { ContentBox } from "./ContentBox";

export interface Step {
  label: string;
  description: JSX.Element;
}

interface Props {
  steps: Step[];
}

export const TextStepper = ({ steps }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [queryLoaded, setQueryLoaded] = useState(false);
  const maxSteps = steps.length;

  useEffect(() => {
    if (router.isReady && queryLoaded) {
      const query = router.query;
      const step = Number(query.slide) - 1;
      if (step != activeStep) {
        const pathname = router.pathname;
        router.push({
          pathname,
          query: {
            ...router.query,
            slide: activeStep + 1,
          },
        });
      }
    }
  }, [activeStep, queryLoaded, router.query]);
  useEffect(() => {
    if (router.isReady && !queryLoaded) {
      const query = router.query;
      const step = Number(query.slide) - 1;
      setActiveStep(step);
      setQueryLoaded(true);
    }
  }, [queryLoaded, router.isReady, router.query]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <h3 style={{ padding: "1.5rem" }}>{steps[activeStep].label}</h3>
      <ContentBox theme="gray" style={{ minHeight: "9rem" }}>
        {steps[activeStep].description}
      </ContentBox>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            進む
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            戻る
          </Button>
        }
      />
    </div>
  );
};
