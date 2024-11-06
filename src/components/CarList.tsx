"use client";
import React from 'react'
import type { Offer } from "@prisma/client"

type OfferListProps = {
  offerList: Offer[]
}

function CarList({offerList}: OfferListProps) {

  return (
    <div>
      <h2>Car List</h2>
      {offerList.map((offer) => { return (
          <div className="flex items-baseline" key={offer.id}>
            <h1 className="text-2xl mr-3">{offer.price}</h1>
            <p>{offer.description}</p>
          </div>
         )})}
    </div>
  )
}


// client component
// function CarList() {

//   const { data: offers, refetch: refetchOffers, isLoading } = api.offer.getAll.useQuery();

//   if (isLoading) return <h3>Reading Cars...</h3>;

//   return (
//     <div>
//       <h2>Car List</h2>
//       {offers?.map((offer) => { return (
//           <div className="flex items-baseline" key={offer.id}>
//             <h1 className="text-2xl mr-3">{offer.price}</h1>
//             <p>{offer.description}</p>
//           </div>
//          )})}
//     </div>
//   )
// }

export default CarList