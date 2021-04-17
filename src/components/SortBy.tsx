import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import { useMemo } from 'react'
import { navBarButtons } from 'utils/navbar'
import SelectBox from './SelectBox/SelectBox'

const SortBy: React.FC = () => {
  const router = useRouter()
  const category = router?.query?.category

  const titleToShow = useMemo(() => {
    return navBarButtons.find(({ link }) => link === category)?.title
  }, [category])

  return (
    <SortByContainer>
      <span>{titleToShow}</span>

      <div>
        <SelectBox />
      </div>
    </SortByContainer>
  )
}

export default SortBy

const SortByContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px dashed white;

  padding: 30px 0 30px 0;
  /* transition: 2s; */
  @media (max-width: 1279px) {
    padding: 30px;
  }

  span {
    font: 24px bold Roboto;
    font-weight: 700;
  }

  div {
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
