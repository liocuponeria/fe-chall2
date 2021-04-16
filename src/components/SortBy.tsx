import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import { useMemo } from 'react'
import { navBarButtons } from 'src/utils/navbar'
import { sortBy } from 'src/utils/sort'

const SortBy: React.FC = () => {
  const router = useRouter()
  const { category } = router.query

  const titleToShow = useMemo(() => {
    return navBarButtons.find(({ link }) => link === category)?.title
  }, [category])

  return (
    <SortByContainer>
      <span>{titleToShow}</span>

      <div>
        <select>
          {sortBy.map(({ title, value }) => (
            <option key={title} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
    </SortByContainer>
  )
}

export default SortBy

const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 132px 30px 132px;
  flex-direction: row;

  span {
    font: 24px bold Roboto;
    font-weight: 700;
  }

  div {
    background-color: red;
    margin-left: auto;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 18px;
    span {
      padding: 0;
    }
    div {
      margin: 12px;
      padding-right: 0;
      padding: 0;
    }
  }
`
