import React, { useState } from 'react'
import MotoCard from './components/MotoCard'
import ContactForm from './components/ContactForm'

const MOTOS = [
  {
    id: 1,
    title: 'Kawasaki Z900',
    img: 'https://dhqlmcogwd1an.cloudfront.net/images/phocagallery/Kawasaki/z900-se-2024/10-kawasaki-z900-se-2024-estudio-negro-verde-01.jpg',
    desc: 'Naked de alto rendimiento, motor de 948cc y diseño agresivo.'
  },
  {
    id: 2,
    title: 'Kawasaki Ninja 650',
    img: 'https://images.squarespace-cdn.com/content/v1/639bda5c64492137de0500b9/1681931244121-2HGPJ4FPE3CYQ0XXLM1T/e7269a27-d140-42ed-9085-4592d6e17ed6.jpg?format=1000w',
    desc: 'Deportiva versátil, perfecta para ciudad y carretera.'
  },
  {
    id: 3,
    title: 'Kawasaki Versys 650',
    img: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Versys%20650_GN1_STU%20(1).001.png',
    desc: 'Touring cómoda y confiable para viajes largos.'
  }
]

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (msg, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Kawasaki-Logo.png" alt="Logo Kawasaki" width="70" className="me-2" />
            <span className="fw-bold">KAWASAKI MOTORS</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item"><a className="nav-link" href="#productos">Nuestras Motos</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">Iniciar Sesión</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="inicio" className="hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h1 className="display-4 fw-bold">Kawasaki Motors Store</h1>
          <p className="lead mb-4">Las mejores motos deportivas, naked y touring al mejor precio.</p>
          <div>
            <a href="#contacto" className="btn btn-outline-light btn-lg">Contáctanos</a>
          </div>
        </div>
      </header>

      <main>
        <section id="productos" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-success">Nuestras motos mas vendidas</h2>
            </div>

            <div className="row g-4">
              {MOTOS.map((m) => (
                <div className="col-md-4" key={m.id}>
                  <MotoCard moto={m} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-5 bg-dark text-white">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <h2 className="fw-bold mb-3">Contáctanos</h2>
                <p className="mb-4">Envíanos un mensaje y te responderemos lo antes posible.</p>
                <ul className="list-unstyled">
                  <li><strong>Teléfono:</strong> +591 83924738</li>
                  <li><strong>Email:</strong> kawasakiinfo@gmail.com</li>
                  <li><strong>Dirección:</strong> Av. Marcelo Quiroga SantaCruz, Concesionario Kawasaki</li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ContactForm onNotify={showToast} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white text-center py-3">
        <small>©kawasaki derechos reservados</small>
      </footer>

      {toast && (
        <div className={`toast-custom ${toast.ok ? 'ok' : 'err'}`}>{toast.msg}</div>
      )}
    </>
  )
}
