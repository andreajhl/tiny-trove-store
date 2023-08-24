import ShopLayout from "@/components/layouts/ShopLayout";
import wordings from "@/wordings";

const Custom404 = () => {
  const { warnings: { pageNotFound } } = wordings;

  return (
    <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aquí'>
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100">
          <h1 className="fs-1 text-primary-emphasis w-100 text-center">
            {pageNotFound.title}
          </h1>
          <div className="d-flex justify-content-center align-items-baseline">
            <h2 className="fs-3 w-auto text-dark-emphasis">404 |</h2>
            <p className="fs-4 w-auto text-body-secondary ms-2">{pageNotFound.subtitle}</p>            
          </div>
        </div>
    </ShopLayout>
  )
}

export default Custom404;
