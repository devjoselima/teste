import certificadoImage from "../assets/certificado.png"
import arrow from "../assets/arrow-right.png"

interface CertificateProps {
  onClick: () => void
}

export const Certificate = ({ onClick }: CertificateProps) => {
  return (
    <div className="bg-white" onClick={onClick}>
      <div className="flex md:items-center justify-center">
        <img
          src={certificadoImage}
          alt="imagem do certificado"
          className="h-32"
        />
        <div className="py-3 px-2">
          <h2 className="font-normal text-lg w-1/2">Nome da certificação</h2>
          <span className="text-xs text-[#a1a1a1]">CertifiKEDU</span>

          <div className="flex justify-end">
            <img
              src={arrow}
              alt="seta para direita"
              className="h-7 cursor-pointer pl-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
