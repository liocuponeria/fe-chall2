/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from 'styled-components'
import { sortBy } from 'utils/sort'
import { useFilter } from 'hooks/filter'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import React from 'react'

interface ISelectBoxProps {
  placeholder?: string
  options?: {
    title: string
    value: string
  }[]
}

const SelectBox: React.FC<ISelectBoxProps> = ({
  placeholder = 'ordenar por',
  options = sortBy,
}) => {
  const { setFilter } = useFilter()
  const [isOpen, setIsOpen] = useState(false)
  const [offsetTop, setOffsetTop] = useState(0)
  const [offsetLeft, setOffsetLeft] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleSelectSort = useCallback(
    (value: string) => {
      setFilter(value)
      setIsOpen(false)
    },
    [setFilter]
  )

  const setOffSet = useCallback(() => {
    setOffsetTop(containerRef.current?.offsetTop || 0)
    setOffsetLeft(containerRef.current?.offsetLeft || 0)
  }, [])

  useEffect(() => {
    setOffSet()
  }, [setOffSet])

  const optionsCount = useMemo(() => (options.length > 4 ? 4 : options.length), [options])

  return (
    <>
      <SelectBoxContainer
        data-test-id="selectBoxContainer"
        isOpen={isOpen}
        ref={containerRef}
        onClick={() => setIsOpen((old) => !old)}
      >
        <div className="selectBoxPlaceholder">{placeholder}</div>
        <i className="icon-down-open" />
      </SelectBoxContainer>

      <SelectBoxOptionsContainer
        optionsCount={optionsCount}
        isOpen={isOpen}
        offsetTop={offsetTop}
        offsetLeft={offsetLeft}
      >
        {options.map(({ title, value }, index) => (
          <React.Fragment key={title}>
            <Option
              data-test-id={`selectBoxOption${index}`}
              onClick={() => handleSelectSort(value)}
              className="optionContainer"
            >
              {title}
            </Option>
            {index < options.length - 1 ? <div className="divider" /> : null}
          </React.Fragment>
        ))}
      </SelectBoxOptionsContainer>
    </>
  )
}

export default SelectBox

interface IStyleProps {
  offsetTop?: number
  offsetLeft?: number
  optionsCount?: number
  isOpen: boolean
}

const SelectBoxContainer = styled.div<IStyleProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 328px;
  height: 56px;
  border: 1px solid #f62996;
  border-radius: 4px;
  color: ${({ theme: { colors } }) => colors.primary};

  .selectBoxPlaceholder {
    margin-left: 16px;
    flex: 1;
  }

  i {
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
    transition: 0.5s;
    margin-right: 16px;
  }
`

const SelectBoxOptionsContainer = styled.div<IStyleProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.primary};
  position: fixed;
  width: 328px;
  height: calc(57px * ${({ optionsCount }) => optionsCount});
  top: ${({ offsetTop }) => `${offsetTop + 60}px`};
  border-radius: 4px;
  box-shadow: 0px 6px 12px #0000001f;

  .divider {
    width: 328px;
    height: 1px;
    border: 1px black;
    background-color: ${({ theme: { colors } }) => colors.sortBy.divider};
  }
`

const Option = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 56px;
  margin-left: 16px;
`
