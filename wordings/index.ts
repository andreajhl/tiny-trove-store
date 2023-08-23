export default ({
  title: 'Tiny Trove Store',
  description: 'Tiny Trove is a boutique that offers a selection of products and accessories for babies and newborns.',
  navbar: {
    placeholder: '¿Que estás buscando?',
    cart: 'Mi Carrito',
    options: {
      logged: {
        signOff: 'cerrar sesión',
      },
      loggedOut: {
        signUp: 'Crear cuenta',
        signIn: 'Iniciar sesíon',
      }
    }
  },
  cart: {
    addButton: 'Agregar al carrito',
    total: 'Total',
    subtotal: 'Subtotal',
    discount: 'Descuento',
    finishOrder: 'Finalizar pedido'
  },
  product: {
    quantity: 'Cantidad',
    available: 'disponibles',
    addButtom: 'Agregar',
    outOfStock: 'No hay stock disponible',
  },
  home: {
    banner: {
      creditCard: {
        title: '12 Cuotas',
        subtitle: 'Sin interes',
      },
      warranty: {
        title: 'Garantía',
        subtitle: '1 año',
      },
      store: {
        title: 'Tiendas',
        subtitle: 'Oficiales'
      }
    },
    categories: {
      room: 'Cuarto del Bebé',
      walk: 'Paseos y Salidas',
      toys: 'Juegos y Juguetes',
      breastfeeding: 'Lactancia y Alimentación',
    }
  },
  warnings: {
    createOrden: 'Error no controlado, hable con el administrador'
  } 
})