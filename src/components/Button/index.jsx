import "./index.css";

export const Button = ({
  size = "md",
  variant = "primary",
  children,
  onClick,
}) => {
  const className = `button button--${variant} button--${size}`;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
