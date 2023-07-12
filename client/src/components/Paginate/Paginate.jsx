/* eslint-disable react/prop-types */
import { Container, Page } from '../StyledComponents/StyledPaginate'

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
      const handleClick = () => handlePageChange(page)
      pageNumbers.push(
        <Page key={page} active={page === currentPage} onClick={handleClick}>
          {page}
        </Page>
      )
    }
    return pageNumbers
  }

  return (
    <div>
      <Container>
        <Page onClick={() => handlePageChange(1)}>First</Page>
        <Page onClick={() => handlePageChange(currentPage - 1)}>Prev</Page>
        {renderPageNumbers()}
        <Page onClick={() => handlePageChange(currentPage + 1)}>Next</Page>
        <Page onClick={() => handlePageChange(totalPages)}>Last</Page>
      </Container>
    </div>
  )
}
