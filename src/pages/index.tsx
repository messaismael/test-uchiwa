import React from "react";

import { map } from "lodash-es";
import { Container } from "components";
import { sequencingType, sequescings } from "data";
import { ArrowRight } from "components/icons";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home: React.FC = () => {
  return (
    <Container className="justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h4 className="text-4xl font-medium text-primary mb-4">
          Start by choosing a sequencing
        </h4>
        <ul className="mb-32 flex flex-col text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 gap-4 lg:text-left">
          <Tab.Group>
            <Tab.List className="flex gap-3 space-x-1 rounded-xl bg-blue-900/20 p-1">
              {map(sequencingType, (category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "focus:outline-none hover:text-primary-600 border hover:border-primary-600 text-primary",
                      selected
                        ? "shadow border bg-opacity-30 bg-primary-600 "
                        : "bg-secondary"
                    )
                  }
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-24 w-24  ">
                      <img src={category.image} className="w-full h-full " />
                    </div>
                    {category.name}
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {map(sequencingType, (posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul className="flex flex-col gap-3">
                    {posts.sequencies.map((sequency) => (
                      <a
                        className="min-w-max"
                        href={`/sequency/${sequency.id}`}
                      >
                        <div className="block  p-5 bg-secondary border  rounded-lg hover:border-primary-600 hover:text-primary-600">
                          <div className="flex items-center justify-between gap-4 w-full text-xl mb-1 font-semibold">
                            <span>{sequency.name}</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <p className="font-light text-primary">
                            {sequency.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </ul>
      </div>
    </Container>
  );
};

export default Home;
