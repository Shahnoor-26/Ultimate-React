import {} from "react";

const Button = ({
  children,
  type = "button",
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${backgroundColor} ${textColor} ${className}`}
      {...props} // {...props} means {attributes = {attributes}}
    >
      {children}
    </button>
  );
};

export default Button;
