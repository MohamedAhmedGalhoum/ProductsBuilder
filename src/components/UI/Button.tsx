import {ReactNode, ButtonHTMLAttributes} from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ClassName?: string;
}

const Button = ({children, ClassName, ...rest}: IProps) => {
  return (
    <button className={`text-white py-2 px-4 rounded-lg transition ${ClassName || ''}`} {... rest}> 
      {children}
    </button>
  )
}

export default Button;