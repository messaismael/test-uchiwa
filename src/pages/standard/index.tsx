import React, { useEffect, useState } from "react";

import { isNil, map } from "lodash-es";
import { Container, Stepper } from "components";
import { sequescings } from "data";
import { ArrowRight } from "components/icons";
import BasicInfos from "./BasicInfos";
import ReactionInfos from "./ReactionInfos";
import SampleInfos from "./SampleInfos";
import PrimerInfos from "./PrimerInfos";
import BillingInfos from "./BillingInfos";
import Complete from "./Complete";

import { useLocation, useNavigate } from "react-router";
import AuthService from "services/auth.service";

const steps = [
  {
    id: 1,
    name: "Basic Infos",
  },
  {
    id: 2,
    name: "Reaction Infos",
  },
  {
    id: 3,
    name: "Sample Infos",
  },
  {
    id: 4,
    name: "Primer Condition",
  },
  {
    id: 5,
    name: "Billing Infos",
  },
  {
    id: 6,
    name: "Complete",
  },
];

const Standard: React.FC = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const onChange = (num) => {
    if (num <= 0 || num > steps.length) return;
    console.log(AuthService.isLoggedIn(), "&&", num, "===", 5);
    if (!AuthService.isLoggedIn() && num === 5) {
      navigate(`/auth/login?prev=${location.pathname}${location.hash}`);
      return;
    }

    navigate(`#${num}`);
    setStep(num);
  };

  useEffect(() => {
    if (!isNil(location.hash) && !isNaN(Number(location.hash[1]))) {
      setStep(Number(location.hash[1]));
    }
  });
  return (
    <Container className="grid grid-cols-12">
      <div className="col-span-4 px-4 py-10 flex justify-center bg-secondary">
        <Stepper steps={steps} currentStep={step} />
      </div>
      <div className="col-span-8 px-8 py-6">
        {step === 1 && <BasicInfos onChange={onChange} />}
        {step === 2 && <ReactionInfos onChange={onChange} />}
        {step === 3 && <SampleInfos onChange={onChange} />}
        {step === 4 && <PrimerInfos onChange={onChange} />}
        {step === 5 && <BillingInfos onChange={onChange} />}
        {step === 6 && <Complete />}
      </div>
    </Container>
  );
};

export default Standard;
