import { forwardRef, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PaginationProps } from './model';
import { StyledPagination } from './styled';
import useCreatePaginationItem from './useCreatePaginationItem';

const GridPagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      totalRow,
      pageSize,
      currentPage,
      onChangePage,
      setting = { itemWidth: 32, itemHeight: 32, fontSize: 14 },
      ...restProps
    },
    ref
  ) => {
    const pageEllipsis = 1;

    const total = Math.ceil(totalRow / pageSize);

    const [totalPage, setTotalPage] = useState(total);

    const isDisabledPrev = currentPage <= 1;
    const isDisabledNext = currentPage >= totalPage;

    const handleChangePage = (page: number) => onChangePage?.(page);

    const items = useCreatePaginationItem({
      totalPage: total,
      currentPage,
      onChangePage: handleChangePage,
      pageEllipsis
    });

    useEffect(() => {
      if (totalRow === undefined) return;
      setTotalPage(total);
    }, [totalRow]);

    return (
      <StyledPagination setting={setting}>
        <Pagination size='sm'>
          <Pagination.First
            disabled={isDisabledPrev}
            onClick={() => handleChangePage(1)}
          />
          <Pagination.Prev
            disabled={isDisabledPrev}
            key='prev'
            onClick={() => handleChangePage(currentPage - 1)}
          />
          {items || []}
          <Pagination.Next
            disabled={isDisabledNext}
            key='next'
            onClick={() => handleChangePage(currentPage + 1)}
          />
          <Pagination.Last
            disabled={isDisabledNext}
            onClick={() => handleChangePage(totalPage)}
          />
        </Pagination>
      </StyledPagination>
    );
  }
);

export { GridPagination };
