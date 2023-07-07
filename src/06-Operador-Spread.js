const invoice = {
    id: 1,
    name: "Pepsico S.A. De C.V.",
    date: new Date(),
    client: {
      id: 580062,
      nombre: "Mario",
      apellido: "Zamora",
      edad: 48,
    },
    items: [
      {
        product: "Caminadora",
        price: 5004.45,
        quantity: 2,
      },
      {
        product: "Costal De box",
        price: 3055.85,
        quantity: 1,
      },
      {
        product: "Computadora",
        price: 8740.44,
        quantity: 5,
      },
    ],
    total: function () {
      let total = 0;
      this.items.forEach((item) => {
        total = total + item.price * item.quantity;
      });
      return total;
    },
    saludar: function () {
      return `Hola ${this.client.nombre} ${this.client.apellido}`;
    },
  };
  

  const invoice2 = { ...invoice };
  
  const result = invoice2 == invoice;
  
  if(result) console.log(result);
  else 
  console.log('no son iguales');

  invoice2.name ='Pedro';

  console.log(invoice.name);
  console.log(invoice2.name);

