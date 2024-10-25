import {
  Container,
  PageLink
} from '@/components/StyledComponents/StyledPaginate'
import { setCurrentPage } from '@/redux/actions/pokemonActions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

interface Props {
  totalPages: number
}

export default function Paginate({ totalPages }: Props) {
  const dispatch = useAppDispatch()
  const { currentPage } = useAppSelector(({ pokemons }) => pokemons)

  const handlePageChange = (currentPage: number) => {
    if (currentPage >= 1 && currentPage <= totalPages) {
      dispatch(setCurrentPage(currentPage))
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = []
    const visiblePageCount = 3
    const startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePageCount / 2)
    )
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1)

    for (let page = startPage; page <= endPage; page++) {
      const isActive = currentPage === page ? 'active' : ''

      pageNumbers.push(
        <PageLink
          key={page}
          className={isActive}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageLink>
      )
    }

    return pageNumbers
  }

  return (
    <Container>
      <PageLink onClick={() => handlePageChange(1)}>First</PageLink>
      <PageLink onClick={() => handlePageChange(currentPage - 1)}>
        Prev
      </PageLink>
      {renderPageNumbers()}
      <PageLink onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </PageLink>
      <PageLink onClick={() => handlePageChange(totalPages)}>Last</PageLink>
    </Container>
  )
}
