type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  id,
}: SectionHeadingProps) {
  const highlightNode = titleHighlight ? (
    <>
      {" "}
      <span className="text-[#B87318]">{titleHighlight}</span>
    </>
  ) : null;

  const descriptionNode = description ? (
    <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
      {description}
    </p>
  ) : null;

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title mx-auto mt-3">
        {title}
        {highlightNode}
      </h2>
      <div
        className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-transparent"
        aria-hidden="true"
      />
      {descriptionNode}
    </div>
  );
}
