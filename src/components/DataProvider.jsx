import { createContext } from 'react';

// Creamos el contexto con valores predeterminados
export const DataContext = createContext({
  data: null,
  isLoading: true,
  error: null,
});