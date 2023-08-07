import { forwardRef, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Select } from '@dgtx/select';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PaginationProps } from './model';
import { StyledPagination } from './styled';
import useCreatePaginationItem from './useCreatePaginationItem';

const options2 = [
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
      showSizeCharger = false,
      ...restProps
    },
    ref
  ) => {
    const total = Math.ceil(totalRow / pageSize);

    const [totalPage, setTotalPage] = useState(total);

    const isDisabledPrev = currentPage <= 1;
    const isDisabledNext = currentPage >= totalPage;

    const handleChangePage = (page: number) => onChangePage?.(page);

    const items = useCreatePaginationItem({
      totalPage: total,
      currentPage,
      onChangePage: handleChangePage
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
        {showSizeCharger && (
          <Select options={options2} value={pageSize} onChange={setPageSize} />
        )}
      </StyledPagination>
    );
  }
);

export { GridPagination };
