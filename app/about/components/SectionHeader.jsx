export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-start flex flex-col gap-4">
      <h2 className="font-montserrat font-medium text-[32px] text-headingText">{title}</h2>
      <p className="text-[17px] font-montserrat font-normal text-bodyText ">{subtitle}</p>
    </div>
  );
}