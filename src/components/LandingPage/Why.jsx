import React from 'react';
import WhyCard from './WhyCard';
import creativeAnimationData from "../../assets/creative.json"
import budgetAnimationData from "../../assets/budget.json";
import supportAnimationData from "../../assets/support.json"
import "./Why.css";

function Why() {
  return (<div style={{width:"100%", padding:"15px"}}>
      <div className='container-lg whyDiv'>
      <div className='whyContent'>
        <h1>Why Codiefy Is Your Best Choice
          to Increase Your Website</h1>
        <h5>Codify is a reliable and affordable IT Service Company that can help
          you create a strong presence and reach more</h5>
      </div>
      <div className='container-fluid mt-5'>
      <div className='row mt-5'>
        <WhyCard heading="Creative Team" content="We have a highly talented and
              powerful creative team" data={creativeAnimationData}/>
        
        <WhyCard heading="Budget Friendly" content="We have a highly talented and
              powerful creative team" data={budgetAnimationData}/>
        
        <WhyCard heading="24*7 Support" content="We have a highly talented and
              powerful creative team" data={supportAnimationData}/>
        
       
       
      </div>
      </div>
    </div>
    </div>

  )
}

export default Why
