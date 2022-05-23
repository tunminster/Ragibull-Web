import { Grid } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 0,
  marginBottom: 31,
  boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.25)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "18px", color: '#535353' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
    color: '#222',
    fontWeight: 700,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid container>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>When do Delivery partner get paid?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Weekly Direct Deposit

Ragibull delivery partner get paid on a weekly basis for all deliveries completed between Monday - Sunday of the previous week.

For this, delivery partner needs to complete the delivery partner on-boarding form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How does Ragibull Partner works?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ragibull is an online marketplace platform. Our smartphone app connects delivery partners.

In cities where Ragibull operates, use ragibull driver app to request 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I create delivery partner account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Creating a ragibull delivery partner account requires a valid email address and phone number. You will also need to create a password  and agree to terms and conditions and our privacy notice.

Fill in you full name, phone number. Once you complete, we send an email to verify your email.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};
export default Faq;
