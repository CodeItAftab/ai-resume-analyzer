import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordian";

const ScoreBadge = ({ score }: { score: number }) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
        score > 69
          ? "bg-badge-green"
          : score > 39
            ? "bg-badge-yellow"
            : "bg-badge-red"
      )}
    >
      <img
        src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"}
        alt="score"
        className="size-4"
      />
      <p
        className={cn(
          "text-sm font-medium",
          score > 69
            ? "text-badge-green-text"
            : score > 39
              ? "text-badge-yellow-text"
              : "text-badge-red-text"
        )}
      >
        {score}/100
      </p>
    </div>
  );
};

const CategoryHeader = ({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) => {
  return (
    <div className="flex flex-row gap-4 items-center py-2">
      <p className="text-2xl font-semibold">{title}</p>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent = ({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="bg-gray-50 w-full rounded-lg px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 shadow-sm">
        {tips.map((tip, index) => (
          <div
            className={cn(
              "flex flex-row gap-2 sm:gap-3 items-center p-2 sm:p-3 rounded-xl transition-all duration-200  group w-full",
              tip.type === "good" ? "hover:bg-green-100" : "hover:bg-yellow-100"
            )}
            key={index}
          >
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-full size-6 sm:size-7"
              )}
            >
              <img
                src={
                  tip.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt="score"
                className="size-4"
              />
            </span>
            <p
              className={cn(
                "text-sm sm:text-base font-medium text-gray-700 group-hover:text-black break-words",
                tip.type === "good" ? "text-green-700" : "text-yellow-700"
              )}
            >
              {tip.tip}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 w-full mt-2">
        {tips.map((tip, index) => (
          <div
            key={index + tip.tip}
            className={cn(
              "flex flex-col gap-2 rounded-2xl p-3 sm:p-4 border-l-4 shadow-sm w-full transition-all duration-200",
              tip.type === "good"
                ? "bg-green-50 border-green-400 text-green-800"
                : "bg-yellow-50 border-yellow-400 text-yellow-800"
            )}
          >
            <div className="flex flex-row gap-2 items-center mb-1">
              <span
                className={cn(
                  "inline-flex items-center justify-center rounded-full size-5 sm:size-6",
                  tip.type === "good" ? "bg-green-200" : "bg-yellow-200"
                )}
              >
                <img
                  src={
                    tip.type === "good"
                      ? "/icons/check.svg"
                      : "/icons/warning.svg"
                  }
                  alt="score"
                  className="size-4"
                />
              </span>
              <p className="text-sm sm:text-base font-semibold break-words">
                {tip.tip}
              </p>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed break-words">
              {tip.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
