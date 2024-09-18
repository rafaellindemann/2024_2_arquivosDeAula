import React from 'react'

function NotaFiscal(props) {

  return (
    <div>
        
            <p>Total Bruto: {props.infos.bruto}</p>
            <p>Desconto especial: {props.infos.descontoE}</p>
            <p>Desconto Uber: {props.infos.descontoU}</p>
            <p>Multa: {props.infos.multa}</p>
            <p>Valor a pagar: {props.infos.liquido}</p>
        
    </div>
  )
}

export default NotaFiscal
