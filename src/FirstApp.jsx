/* const saludo = () => {
  return <h1>desde una funcion</h1>;
}; */

import PropTypes from 'prop-types'

export const FirstApp = ({title,subTitle, name})=> {
  /* const nombre = "Juan Manuel !!"; */
  console.log('salen props1',title);
  return (
    <>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectet ur adipisicing elit. Eaque at
        accusantium sapiente iusto quas voluptates perspiciatis, ab perferendis
        numquam officia. Tenetur sed perspiciatis exercitationem dignissimos
        dolores autem laborum aspernatur vitae! {subTitle} mi {name}
      </p>
    </>
  );
};


/* propTypes --> Define el tipo de dato que va a recibir el componente */
FirstApp.propTypes={
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string,
  name: PropTypes.string
}

/* Default props --> define un valor por defecto a las props */
FirstApp.defaultProps={
  title:'No hay titulo',
  subTitle:'No hay subtitulo',
  name:"Juan Manuel"
}
