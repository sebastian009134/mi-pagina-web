import React, { useState } from 'react'

export default function ContactForm({ onNotify }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (nombre.trim().length < 3) return onNotify('Tu nombre debe tener al menos 3 letras.', false)
    if (!/^\S+@\S+\.\S+$/.test(correo)) return onNotify('Correo inválido. Ej: tucorreo@gmail.com', false)
    if (mensaje.trim().length < 10) return onNotify('Tu mensaje es muy corto (mínimo 10).', false)

    setNombre('')
    setCorreo('')
    setMensaje('')
    onNotify('Mensaje enviado ✅ Te responderemos pronto.', true)
  }

  return (
    <form className="contact-form bg-light text-dark p-4 rounded" onSubmit={submit}>
      <div className="mb-3">
        <label className="form-label">Nombre completo</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" placeholder="Tu nombre" />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="email" className="form-control" placeholder="tucorreo@email.com" />
      </div>
      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="form-control" rows="4" placeholder="Escribe tu consulta" />
      </div>
      <button type="submit" className="btn btn-success w-100">Enviar mensaje</button>
    </form>
  )
}
