import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PromptDetail from './promptDetails'
import Info from '@mui/icons-material/Info';
import PromptFile from './promptFile';
import { useEffect } from 'react';
import { useCallback } from 'react';
import axios from 'axios';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const steps = ['Prompt Details', 'Prompt File'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [loading, setLoading] = React.useState(false);
  const [dataFile, setDataFile] = React.useState({
    message:'',
    instuction: '',
    detailTwo: '',
    images: []
});

const [dataDetail, setDataDetail] = React.useState({
  promptType:'',
  promptName:'',
  promptDetail:'',
  promptPrice:''
});


const passToContent = (data, options) => {
  if(options === 'image') {
    setDataFile(obj => ({...obj, images: data}))
  } else if(options === 'detail') {
    setDataFile(obj => ({...obj, detailTwo: data}))
  } else if(options === 'instuction') {
    setDataFile(obj => ({...obj, instuction: data}))
  } else if(options === 'message') {
    setDataFile(obj => ({...obj, message: data}))
  }
}

const fromPromptDetail = (data, options) => {
  if(options === 'type') {
    setDataDetail(obj => ({...obj, promptType: data}))
  } else if(options === 'name') {
    setDataDetail(obj => ({...obj, promptName: data}))
  } else if(options === 'detail') {
    setDataDetail(obj => ({...obj, promptDetail: data}))
  } else if(options === 'price') {
    setDataDetail(obj => ({...obj, promptPrice: data}))
  }
}

const sendDataToApi = async (data) => {
  try {
    const res = await axios.post('https://eotvpgsnftfojs9.m.pipedream.net', data);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
  useEffect(() => {
    console.log(dataFile);
    // sendDataToApi(dataFile);
  }, [dataFile]);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    if(activeStep === steps.length - 1) {
      handleLoadingToggle();
      console.log(dataFile);
      console.log(dataDetail);
      const mergeData = {...dataFile, ...dataDetail}; 
      await sendDataToApi(mergeData);
      handleLoadingClose();
    }

   


    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

 
  };
  const handleLoadingClose = () => {
    setLoading(false);
  };
  const handleLoadingToggle = () => {
    setLoading(!loading);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: '#B6FD16', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label': {
                    color: 'white  ', // circle color (ACTIVE)
                  },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: '#B6FD16', // Just text label (COMPLETED)
                  },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'white  ', // circle color (ACTIVE)
                },

                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'white', // Just text label (ACTIVE)
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'black', // circle's number (ACTIVE)
                },
    
              }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            // labelProps.optional = (
            //   <Typography variant="caption" color="common.white">Optional</Typography>
            // );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleReset}>Preview</Button> */}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <br/>
            <br/>
          {activeStep === 0 ? <PromptDetail fromPromptDetail={fromPromptDetail}></PromptDetail> : ''}
          {activeStep === 1 ? <PromptFile passToContent={passToContent}></PromptFile> : ''}
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="warning"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
         
            <Button onClick={handleNext} color="warning">
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>

          </Box>
        </React.Fragment>
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleLoadingClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
    
  );
}