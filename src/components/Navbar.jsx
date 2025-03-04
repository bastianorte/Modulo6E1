import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu, GiWhiteBook } from "react-icons/gi";
import { useState } from 'react';
import Modal from './Modal';

const navigation = [
  { name: 'Inicio', to: '/', current: true  },
  { name: 'Equipo', to: '/Equipo', current: false },
  { name: 'Contacto', to: '/Contacto', current: false },   
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Disclosure as="nav" className="bg-primary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" /><GiHamburgerMenu className='text-white' />
              <span className="sr-only">Open main menu</span>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src='../assets/lg2.svg'
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block right-0 absolute">

              <div className="flex space-x-4">
                {navigation.map((item) => (                                
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "text-white font-bold" : "text-secondary"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

<button 
        onClick={openModal}
        className="px-4 bg-third text-white rounded-lg hover:bg-third text-xs"
      >
        Horarios de Atención
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />          
              
              </div>



            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}     

<button 
        onClick={openModal}
        className="px-4 bg-third text-white rounded-lg hover:bg-third text-xs"
      >
        Horarios de Atención
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} /> 

        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
