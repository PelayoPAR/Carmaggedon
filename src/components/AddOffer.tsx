import React, { FormEvent, useState } from 'react'

type AddOfferProps = {
  createOffer: (offer: { price: number, description: string, fuel: string, year: number, make: string, model: string}) => void
}

export function AddOffer({ createOffer }: AddOfferProps) {

  const [price, setPrice] = useState<number|null>(null)
  const [description, setDescription] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState<number|null>(null)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log({ price, description })
    createOffer({price: Number(price), description, fuel, year: Number(year), make, model})
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => { setPrice(Number(e.target.value)) }} value={price ?? ''} name="price" type="number" step={0.01} placeholder="Offer Price" />
      <input onChange={(e) => { setDescription(e.target.value) }} value={description} name="description" type="text" placeholder="Offer Description" />
      <input onChange={(e) => { setFuel(e.target.value) }} value={fuel} name="fuel" type="text" placeholder="Fuel Type" />
      <input onChange={(e) => { setYear(Number(e.target.value)) }} value={year ?? ''} name="year" type="number" placeholder="Year" />
      <input onChange={(e) => { setMake(e.target.value) }} value={make} name="make" type="text" placeholder="Make" />
      <input onChange={(e) => { setModel(e.target.value) }} value={model} name="model" type="text" placeholder="Model" />

      <button type="submit">Add Offer</button>
    </form>
  )
}
