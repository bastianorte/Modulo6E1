import React from 'react';

interface Data {
  id: number;
  name: string;
  photo: string;
}

interface TestimoniosProps {
  data: Data[];
}

const Testimonios: React.FC<TestimoniosProps> = ({data}) => {
    return (
      <>
        <div className="mx-auto max-w-2xl text-center pb-8">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Testimonios</h2>
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-3 lg:px-8 xl:grid-cols-3">
          {data
          .filter((_, index) => index < 3) 
          .map(({ id, name, photo }) => (
          <div key={id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
            <div className="flex flex-col items-center p-6">
                <img className="w-24 h-24 mb-3 rounded-full sepia" src={photo}  alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-primary">{name.length > 25 ? 'Juan Perez' : name}</h5>
                <span className="text-sm text-primary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!</span>
                <div className="flex mt-4 md:mt-6">

                </div>
            </div>
          </div>
          ))}
        </div>
      </>     
    );
  };


export default Testimonios