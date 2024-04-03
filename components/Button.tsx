import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <a
      className={`flex items-center gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="font-bold text-base whitespace-nowrap cursor-pointer">{title}</span>
    </a>
  );
}

export default Button;