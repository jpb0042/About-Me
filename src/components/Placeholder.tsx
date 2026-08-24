type PlaceholderProps = {
  label: string;
  caption?: string;
};

export function Placeholder({ label, caption }: PlaceholderProps) {
  return (
    <figure className="placeholder">
      <div className="placeholder__frame" role="img" aria-label={label}>
        <span className="placeholder__sheen" aria-hidden />
        <span>{label}</span>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
