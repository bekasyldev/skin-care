import React from "react";
import { Button } from "./ui/button";
import { questions } from "@/constants/data";
import MaxWidthWrapper from "./MaxwidthWrapper";

const Questions = () => {
  return (
    <section className="bg-[#C7E5D6]">
      <MaxWidthWrapper className="h-screen py-24 flex flex-row ">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold">
            Frequently Asked <br className="mb-2" />
            Questions
          </h1>
          <p>
            Find answers to common questions about our skin care products,
            shipping, and returns.
          </p>
          <Button variant={"outline"}>Contact</Button>
        </div>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="space-y-2">
              <hr className="border-black my-4" />
              <span className="font-semibold">{question.question}</span>
              <p className="text-gray-600">{question.answer}</p>
            </li>
          ))}
          <hr className="border-black mt-4" />
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Questions;
