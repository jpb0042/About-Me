type SectionHeadProps = {
  index: string;
  title: string;
};

export function SectionHead({ index, title }: SectionHeadProps) {
  return (
    <header className="block__head">
      <span className="block__index" aria-hidden>
        {index}
      </span>
      <h2>{title}</h2>
      <span className="block__rule" aria-hidden />
    </header>
  );
}
