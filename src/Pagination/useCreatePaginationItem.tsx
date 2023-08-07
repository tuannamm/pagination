import PaginationItem from './PaginationItem';
import { Pagination } from 'react-bootstrap';

import { UsePaginationItemsProps } from './model';
import { MouseEventHandler } from 'react';

const useCreatePaginationItem = ({
  total,
  currentPage,
  onChangePage,
  pageEllipsis
}: UsePaginationItemsProps) => {
  const items = new Array(total).fill(null).map((_, page) => {
    page++;
    if (
      page <= 2 ||
      page > total - 2 ||
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

  if (currentPage + pageEllipsis < total - 2) {
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

export default useCreatePaginationItem;
