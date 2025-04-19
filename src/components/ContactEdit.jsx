import React from 'react'
import { useParams } from 'react-router-dom'


function ContactEdit() {
  const { slug, id } = useParams()
  console.log(slug, id)
  return (
    <div>
      edicion de contacto
    </div>
  )
}

export default ContactEdit
