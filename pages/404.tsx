import ShopLayout from "@/components/layouts/ShopLayout";

const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aquí'>
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100">
          <h1 className="fs-1 text-primary-emphasis">Oops!</h1>
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="fs-3 text-dark-emphasis">404 |</h1>
            <p className="fs-5 text-body-secondary ms-2">No encontramos ninguna página aquí</p>            
          </div>
        </div>
    </ShopLayout>
  )
}

export default Custom404;
