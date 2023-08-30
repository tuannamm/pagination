import { forwardRef, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Select } from '@dgtx/select';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PaginationProps } from './model';
import { StyledPagination } from './styled';
import useCreatePagination from './useCreatePagination';

const options = [
  { value: 10, label: '10 / page' },
  { value: 20, label: '20 / page' },
  { value: 50, label: '50 / page' }
];

const GridPagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      totalRow,
      pageSize,
      currentPage,
      onChangePage,
      setPageSize,
      setting = { itemWidth: 32, itemHeight: 32, fontSize: 14 },
      showSizePage = false,
      ...restProps
    },
    ref
  ) => {
    const total = Math.ceil(totalRow / pageSize);

    const [totalPage, setTotalPage] = useState(total);

    const isDisabledPrev = currentPage <= 1;
    const isDisabledNext = currentPage >= total;

    const handleChangePage = (page: number) => onChangePage?.(page);

    const items = useCreatePagination({
      totalPage: total,
      currentPage,
      onChangePage: handleChangePage
    });

    useEffect(() => {
      if (totalRow === undefined) return;
      setTotalPage(totalPage);
      handleChangePage(1);
    }, [totalRow, pageSize]);

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
            onClick={() => handleChangePage(total)}
          />
        </Pagination>
        {showSizePage && (
          <Select options={options} value={pageSize} onChange={setPageSize} />
        )}
      </StyledPagination>
    );
  }
);

export { GridPagination };
