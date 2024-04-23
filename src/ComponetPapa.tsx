import React, { useContext } from 'react'
import { FetchContext } from './contex/providerFetch';

type Props = {}

const ComponetPapa = (props: Props) => {
    const fetchContext = useContext(FetchContext);
    const {data} =fetchContext
    console.log(data);
    
  return (
    <div>ComponetPapa</div>
  )
}

export default ComponetPapa