import PropTypes from 'prop-types';

const ServiceList = ({servicios}) => {
    return (
        <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-2xl text-center pb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Servicios</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-3 lg:px-8 xl:grid-cols-3">
        {servicios.map(({ id, nombre, texto, icon }) => (
        <div key={id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
        <div className="flex flex-col items-center p-6">
            {icon}
            <h5 className="mb-1 text-xl font-medium text-primary">{nombre}</h5>
            <span className="text-sm text-primary">{texto}</span>
            <div className="flex mt-4 md:mt-6">

            </div>
        </div>
    </div>
        ))}
      </div>
      </div>      
    );
  };

  ServiceList.propTypes = {
    servicios: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    })
    ).isRequired,
    };


export default ServiceList