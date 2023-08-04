import { Pagination } from 'react-bootstrap';
import { PageItemProps } from './model';

const PaginationItem = ({ page, key, active, onClick }: PageItemProps) => {
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
};

export default PaginationItem;
