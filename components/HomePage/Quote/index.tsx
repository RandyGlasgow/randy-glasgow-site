import { QuoteIcon } from "@radix-ui/react-icons";

export default ({ message }: { message: string }) => {
  return (
    <blockquote className="flex">
      <QuoteIcon className="transform rotate-180" />
      <p className="text-xl text-white">{message}</p>
      <QuoteIcon className="" />
    </blockquote>
  );
};
