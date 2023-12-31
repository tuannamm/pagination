import PaginationItem from './PaginationItem';
import { Pagination } from 'react-bootstrap';

import { UsePaginationItemsProps } from './model';

const useCreatePagination = ({
  totalPage,
  currentPage,
  onChangePage
}: UsePaginationItemsProps) => {
  const pageEllipsis = 1;
  const items = new Array(totalPage).fill(null).map((_, page) => {
    page++;
    if (
      page <= 2 ||
      page > totalPage - 2 ||
      Math.abs(currentPage - page) <= pageEllipsis
    )
      return (
        <PaginationItem
          key={page}
          onClick={() => onChangePage(page)}
          active={page === currentPage}
          page={page}
        />
      );
    return null;
  });

  if (currentPage - pageEllipsis > 2) {
    items.splice(
      1,
      1,
      <Pagination.Ellipsis
        key='ellipsis1'
        onClick={() => onChangePage(currentPage - pageEllipsis - 2)}
      />
    );
  }

  if (currentPage + pageEllipsis < totalPage - 2) {
    items.splice(
      items.length - 2,
      1,
      <Pagination.Ellipsis
        key='ellipsis2'
        onClick={() => onChangePage(currentPage + pageEllipsis + 2)}
      />
    );
  }
  return items;
};

export default useCreatePagination;
