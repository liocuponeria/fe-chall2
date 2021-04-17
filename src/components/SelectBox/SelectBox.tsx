import styled from 'styled-components'
import { sortBy } from 'utils/sort'
import { useFilter } from 'hooks/filter'

const SelectBox: React.FC = () => {
  const { filter, setFilter } = useFilter()

  return (
    <SelectBoxContainer
      data-test-id="selectBox"
      value={filter}
      placeholder="placeholder"
      onChange={({ currentTarget: { value } }) => {
        setFilter(value)
      }}
    >
      {sortBy.map(({ title, value }) => (
        <option key={title} value={value}>
          {title}
        </option>
      ))}
    </SelectBoxContainer>
  )
}

export default SelectBox

const SelectBoxContainer = styled.select`
  background-color: ${({ theme: { colors } }) => colors.background};

  width: 328px;
  height: 56px;
  padding: 12px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme: { colors } }) => colors.sortBy.border};

  font-size: 16px;
  font-family: Roboto;
  color: ${({ theme: { colors } }) => colors.primary};
`
