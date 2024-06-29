import { cn } from "@/lib/utils";

const Container = ({ children, className, ...props }) => {
  return (
    <div className={cn("mx-auto my-4 max-w-screen-2xl px-4 md:my-8 md:px-5 lg:my-10 xl:px-6 2xl:px-10", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
