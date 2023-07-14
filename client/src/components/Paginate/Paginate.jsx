/* eslint-disable react/prop-types */
import { Container, PageLink } from '../StyledComponents/StyledPaginate'

export default function Paginate({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const visiblePageCount = 5
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
