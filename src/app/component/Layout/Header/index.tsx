import React from 'react'
import {ReactComponent as PokemonLogo} from "app/assets/logo-pokemon.svg"
import { PokemonType } from 'app/component/PokemonTypeFilter'

export const Header = () => {
  return (
    <><header className="text-gray-600 body-font bg-indigo-950">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
       <PokemonLogo />
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        
        <PokemonType  type={"fire"} tabIndex={false} />
      </nav>
     
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header></>
  )
}
