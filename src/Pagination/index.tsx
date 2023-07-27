import { forwardRef, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PaginationProps } from './model';
import { StyledPagination } from './styled';

const GridPagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { totalRow, pageSize, currentPage, onChangePage, size, ...restProps },
    ref
  ) => {
    const pageEllipsis = 1;

    const total = Math.ceil(totalRow / pageSize);

    const [totalPage, setTotalPage] = useState(total);

    const isDisabledPrev = currentPage <= 1;
    const isDisabledNext = currentPage >= totalPage;

    const items = new Array(totalPage).fill(null).map((_, page) => {
      page++;
      if (
        page <= 2 ||
        page > totalPage - 2 ||
        Math.abs(currentPage - page) <= pageEllipsis
      ) {
        return (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onChangePage(page)}
          >
            {page}
          </Pagination.Item>
        );
      }
    });

    if (currentPage - pageEllipsis > 3) {
      items.splice(
        2,
        0,
        <Pagination.Ellipsis
          key='ellipsis1'
          onClick={() => onChangePage(currentPage - pageEllipsis - 2)}
        />
      );
    }

    if (currentPage + pageEllipsis < totalPage - 2) {
      items.splice(
        items.length - 2,
        0,
        <Pagination.Ellipsis
          key='ellipsis2'
          onClick={() => onChangePage(currentPage + pageEllipsis + 2)}
        />
      );
    }

    // controlled
    useEffect(() => {
      if (totalRow === undefined) return;
      setTotalPage(total);
    }, [totalRow]);

    return (
      <StyledPagination>
        <Pagination size={size}>
          <Pagination.First
            disabled={isDisabledPrev}
            onClick={() => onChangePage(1)}
          />
          <Pagination.Prev
            disabled={isDisabledPrev}
            key='prev'
            onClick={() => onChangePage(currentPage - 1)}
          />
          {items}
          <Pagination.Next
            disabled={isDisabledNext}
            key='next'
            onClick={() => onChangePage(currentPage + 1)}
          />
          <Pagination.Last
            disabled={isDisabledNext}
            onClick={() => onChangePage(totalPage)}
          />
        </Pagination>
      </StyledPagination>
    );
  }
);

export { GridPagination };
