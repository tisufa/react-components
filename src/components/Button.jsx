const buttonVariant = {
  PRIMARY: "bg-lime-500 border-lime-500 hover:bg-lime-600 hover:border-lime-600 disabled:bg-lime-500",
  SECONDARY: "bg-gray-400 border-gray-400 hover:bg-gray-500 hover:border-gray-500 disabled:bg-gray-400",
  INFO: "bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 disabled:bg-blue-500",
  SUCCESS: "bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 disabled:bg-green-500",
  WARNING: "bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 disabled:bg-yellow-500",
  DANGER: "bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 disabled:bg-red-500",
  LIGHT: "bg-white border-transparent text-black hover:bg-gray-100 hover:border-gray-100 disabled:bg-white",
  DARK: "bg-black text-white hover:bg-gray-900 hover:border-gray-900 disabled:bg-black",
};

const buttonOutlineVariant = {
  PRIMARY: "border-lime-500 hover:bg-lime-600 hover:border-lime-600 disabled:bg-lime-500",
  SECONDARY: "border-gray-400 hover:bg-gray-500 hover:border-gray-500 disabled:bg-gray-400",
  INFO: "border-blue-500 hover:bg-blue-600 hover:border-blue-600 disabled:bg-blue-500",
  SUCCESS: "border-green-400 hover:bg-green-500 hover:border-green-500  disabled:bg-green-400",
  WARNING: "border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600  disabled:bg-yellow-500",
  DANGER: "border-red-500 hover:bg-red-600 hover:border-red-600 disabled:bg-red-500",
  LIGHT: "border-gray-100 text-black hover:bg-gray-100 hover:border-gray-100 disabled:bg-white",
  DARK: "border-black hover:bg-gray-900 hover:text-white hover:border-gray-900 disabled:bg-black",
};

const buttonSize = {
  SM: "px-2",
  MD: "px-3 py-1",
  LG: "px-3 py-2",
};

const Button = ({
  type,
  outline,
  variant,
  size,
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`border-2 cursor-pointer rounded-md disabled:opacity-50 disabled:cursor-default ${
        outline
          ? buttonOutlineVariant[variant || "PRIMARY"]
          : buttonVariant[variant || "PRIMARY"]
      } ${buttonSize[size || "MD"]}`}
      onClick={onClick}
    >
      <div className="flex gap-1 items-center">{children}</div>
    </button>
  );
};

export { Button };
