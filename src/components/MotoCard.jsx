import React from 'react'

export default function MotoCard({ moto }) {
  return (
    <div className="card producto-card h-100">
      <img src={moto.img} className="card-img-top" alt={moto.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{moto.title}</h5>
        <p className="card-text flex-grow-1">{moto.desc}</p>
      </div>
    </div>
  )
}
