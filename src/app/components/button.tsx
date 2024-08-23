type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  return (
    <button
      className={`button ${variant === "secondary" ? "button--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
