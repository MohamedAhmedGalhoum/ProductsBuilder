import {ReactNode} from "react"

interface IProps {
  children: ReactNode;
  ClassName?: string;
}

const Button = ({children, ClassName}: IProps) => {
  return (
    <button className={`text-white py-2 px-4 rounded-lg transition ${ClassName || ''}`}> 
      {children}
    </button>
  )
}

export default Button;