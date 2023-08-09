import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        ques:"What services does Codeify IT Service Pvt Ltd offer ?",
         ans:"Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learns more",

    },
    {
        ques:"How much do the service cost ?",
        ans:"Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learns more",
    },
    {
        ques:"How much do the service cost ?",
        ans:"Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learns more",
    },
    {
      ques:"How do I get started with the IT solutions ?",
      ans:"Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learns more",
    }
]

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
     
    
      {faqs.map((faq, index)=>{
        return <Accordion  expanded={expanded === index} onChange={handleChange(index)} style={{backgroundColor:"#f5f6f7", border:"none", borderBottom:"1px solid #686868", boxShadow:"none", borderRadius:"0px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography  sx={{ width: '100%',fontSize:"20px", flexShrink: 0 }}>{faq.ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"17px", color:"#686868"}}>
           {faq.ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}
    </div>
  );
}
