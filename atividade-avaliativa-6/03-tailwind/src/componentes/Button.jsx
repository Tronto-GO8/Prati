import React from "react";

export default function Button({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  ...props
}) {

  // Classes base comuns a todos os botões
   const baseClasses = "rounded-md px-4 py-2 cursor-pointer focus:outline-none focus:ring-3 focus:ring-black disabled:cursor-not-allowed disabled:opacity-60 focus:outline-black focus:outline-4 focus:outline-offset-2";

  // Classes específicas de cada variante
  let variantClasses = "";
  switch (variant) {
    case "solid":
      variantClasses = "bg-[#2563eb] text-white border-none border-r-6px";
      break;
    case "outline":
      variantClasses = "bg-transparent text-[#2563eb] border-2 border-[#2563eb]";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-[#2563eb] border-none";
      break;
    default:
      variantClasses = "";
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses}`}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
