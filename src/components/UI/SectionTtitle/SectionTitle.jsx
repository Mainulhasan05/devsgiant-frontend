import { cn } from "@/lib/utils";

const SectionTitle = ({ className, title, subTitle }) => {
  const customStyle = "lg:w-[60%] mx-auto text-center";

  return (
    <div className={cn(customStyle, className)}>
      <h3>{subTitle}</h3>
      <h2 className="text-5xl font-semibold mb-10 mt-5">{title}</h2>
    </div>
  );
};

export default SectionTitle;
