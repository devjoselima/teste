import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import logo from "./assets/logo.svg"

import { MenuItem } from "./components/menu-item"
import { Button } from "./components/button"
import { SearchBar } from "./components/search-bar"
import { Certificate } from "./components/certificate"

import { certificates as initialCertificates } from "./mock/certificates"

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Minha Carteira")
  const [certificates, setCertificates] = useState(initialCertificates)
  const [search, setSearch] = useState("")

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleAddCertificate = () => {
    const certificateId = certificates.length + 1

    const newCertificate = {
      id: certificateId,
      name: "Nome da certificação",
      company: "CertifiKEDU",
    }

    setCertificates([...certificates, newCertificate])

    toast.success("Certificação adicionada com sucesso", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      pauseOnHover: false,
    })
  }

  const handleRemoveCertificate = (currentId: number) => {
    setCertificates(
      certificates.filter((certificate) => certificate.id !== currentId)
    )

    toast.success("Certificação removida com sucesso", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      pauseOnHover: false,
    })
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value)
  }

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-[#f8f9fa]">
      <ToastContainer />
      <nav className=" border-gray-200 bg-[#f8f9fa]  text-gray-900 border-b-4 h-[65px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}>
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <MenuItem
                href="#"
                text="Minha Carteira"
                isActive={activeLink === "Minha Carteira"}
                onClick={() => setActiveLink("Minha Carteira")}
              />
              <MenuItem
                href="#"
                text="Meu perfil"
                isActive={activeLink === "Meu perfil"}
                onClick={() => setActiveLink("Meu perfil")}
              />
            </ul>
          </div>
        </div>
      </nav>

      <main className="pb-[340px]">
        <div className="w-full max-w-screen-lg container mx-auto">
          <div className="lg:flex items-center justify-between py-6 block">
            <h1 className="text-3xl text-bold text-center">Minha carteira</h1>
            <div className="flex justify-center py-3">
              <SearchBar query={handleSearch} />
              <Button onClick={handleAddCertificate} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
            {filteredCertificates.map((certificate) => (
              <Certificate
                key={certificate.id}
                name={certificate.name}
                company={certificate.company}
                onClick={() => handleRemoveCertificate(certificate.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
