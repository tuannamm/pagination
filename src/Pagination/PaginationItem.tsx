import { forwardRef } from 'react';
import { Pagination } from 'react-bootstrap';

import { PageItemProps } from './model';

const PaginationItem = forwardRef<HTMLDivElement, PageItemProps>(
  ({ page, key, active, onClick, ...restProps }, ref) => {
    const handleChangePage = (page: number) => onClick?.(page);

    return (
      <Pagination.Item
        key={key}
        active={active}
        onClick={() => handleChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
);

export default PaginationItem;
