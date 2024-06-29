import { cn } from "@/lib/utils";

const Button = ({ className, type, children }) => {
  const customStyle =
    type === "outline"
      ? ""
      : "px-5 md:px-7 font-medium lg:px-8 py-2 md:py-3 rounded-md";

  return <button className={cn(customStyle, className)}>{children}</button>;
};

export default Button;
