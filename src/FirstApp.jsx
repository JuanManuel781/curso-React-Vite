const saludo = () => {
  return <h1>desde una funcion</h1>;
};

export const FirstApp = (props) => {
  const nombre = "Juan Manuel !!";
  console.log(props);

  return (
    <>
      <h1>Nombre: {nombre}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque at
        accusantium sapiente iusto quas voluptates perspiciatis, ab perferendis
        numquam officia. Tenetur sed perspiciatis exercitationem dignissimos
        dolores autem laborum aspernatur vitae!
      </p>
    </>
  );
};
