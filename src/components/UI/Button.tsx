import {ReactNode, ButtonHTMLAttributes} from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ClassName?: string;
  width?: 'w-fit' | 'w-full';
}

const Button = ({children, ClassName, width = "w-fit", ...rest}: IProps) => {
  return (
    <button className={`text-white py-2 px-4 rounded-md transition ${width} ${ClassName || ''}`} {... rest}> 
      {children}
    </button>
  )
}

export default Button;