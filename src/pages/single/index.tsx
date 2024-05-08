import React, { useState } from "react";

import { map } from "lodash-es";
import { Container, Stepper } from "components";
import { sequescings } from "data";
import { ArrowRight } from "components/icons";
import BasicInfos from "./BasicInfos";
import ReactionInfos from "./ReactionInfos";
import SampleInfos from "./SampleInfos";
import PrimerInfos from "./PrimerInfos";
import BillingInfos from "./BillingInfos";
import Complete from "./Complete";

const steps = [
  {
    id: 1,
    name: "Basic Infos",
  },

  {
    id: 2,
    name: "Billing Infos",
  },
  {
    id: 3,
    name: "Complete",
  },
];

const Single: React.FC = () => {
  const [step, setStep] = useState(1);

  const onChange = (num) => {
    if (num <= 0 || num > steps.length) return;
    setStep(num);
  };
  return (
    <Container className="grid grid-cols-12">
      <div className="col-span-4 px-4 py-10 flex justify-center bg-secondary">
        <Stepper steps={steps} currentStep={step} />
      </div>
      <div className="col-span-8 px-8 py-6">
        {step === 1 && <BasicInfos onChange={onChange} />}
        {step === 2 && <BillingInfos onChange={onChange} />}
        {step === 3 && <Complete />}
      </div>
    </Container>
  );
};

export default Single;
