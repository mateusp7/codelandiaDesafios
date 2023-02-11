import React from "react";
import Arrow from "../assets/arrow.svg";

const Accordion = () => {
  const questions = [
    {
      id: "1",
      titulo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, urna sit amet semper lobortis, turpis eros eleifend tellus, ut placerat tortor odio vel dui. Nunc sit amet accumsan enim. Aliquam molestie, enim et porta placerat, tellus sapien sagittis nisl.",
    },
    {
      id: "2",
      titulo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      titulo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, urna sit amet semper lobortis, turpis eros eleifend tellus, ut placerat tortor",
    },
    {
      id: "4",
      titulo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, urna sit amet semper lobortis, turpis eros eleifend tellus, ut placerat tortor odio vel dui. Nunc sit amet accumsan enim. Aliquam molestie, enim et porta placerat, tellus sapien sagittis nisl.odio vel dui.",
    },
  ];
  const [open, setOpen] = React.useState(-1);

  return (
    <div className="max-w-[1200px] pt-14 pb-14 " style={{ margin: "0 auto" }}>
      <h1 className="text-white font-semibold text-4xl mb-14 ">
        Peguntas Frequentes
      </h1>
      {questions &&
        questions.map((question, i) => (
          <div
            key={question.id}
            className={`w-full ${
              open === i ? "ativo" : ""
            } containerAccordionItem`}
          >
            <div
              onClick={() => {
                open !== i ? setOpen(i) : setOpen(-1);
                console.log(open, i);
              }}
              aria-hidden="true"
              className="flex flex-row justify-between py-4 cursor-pointer items-center"
            >
              <h1 className="text-white text-xl font-normal">
                {question.titulo}
              </h1>
              <img
                src={Arrow}
                alt="Arrow"
                className={`${
                  open === i
                    ? "rotate-180 ease-linear duration-300"
                    : "rotate-0 ease-linear duration-300"
                }`}
              />
            </div>
            <div>
              {open !== i ? (
                <p
                  className="text-gray-400 text-base font-normal opacity-0 duration-300 h-0 ml-3 ease-linear"
                  style={{ transform: "translateY(-10px)" }}
                >
                  {question.response}
                </p>
              ) : (
                <p
                  className="text-gray-400 text-base font-normal opacity-100 duration-300 ml-3 ease-linear h-20"
                  style={{ transform: "translateY(0px)" }}
                >
                  {question.response}
                </p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
