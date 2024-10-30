// Lo que esta en home est'e en admin (mainly el form con la lista)
// y en home no debe haber formulario ni acceso a login 
// Enterarse de como acotar acceso de gujel segun a email 

export default async function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            {/* <AddOffer createOffer={createOffer} />
            <OfferList /> */}
        </div>
    )
}