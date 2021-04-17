import React, { createContext, useContext, useState } from 'react'
import { emptyValue } from 'src/utils/sort'

interface FiltersContextData {
  filter: string
  setFilter: React.Dispatch<string>
}

const FiltersContext = createContext<FiltersContextData>({} as FiltersContextData)

const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState<string>(emptyValue)

  return (
    <FiltersContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

function useFilter(): FiltersContextData {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters deve ser utilizado com um ModelProvider')
  }

  return context
}

export { FilterProvider, useFilter }
