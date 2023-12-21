interface ButtonProps {
  onClick?: () => void
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="btn bg-[#fe7c21] text-white uppercase p-3 text-sm"
      onClick={onClick}>
      Nova certificação
    </button>
  )
}
