import React, { FormEvent, useState } from 'react'


export function AddOffer() {

    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log({ price, description })
    }

  return (
    <form onSubmit={submitHandler}> 
        <input onChange={(e) => {setPrice(e.target.value)}} value={price} name="price" type="number" placeholder="Offer Price" />
        <input onChange={(e) => {setDescription(e.target.value)}} value={description} name="description" type="text" placeholder="Offer Description" />
        <button type="submit">Add Offer</button>
    </form>
  )
}
