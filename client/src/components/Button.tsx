type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export function Button({ label, type = "button", onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className="button">
      {label}
    </button>
  );
}
