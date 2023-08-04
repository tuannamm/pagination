export interface PaginationProps {
    currentPage: number | 1;
    onChangePage: (currentPage: number) => void;
    size?: 'sm' | "lg";
    totalRow: number,
    pageSize: number,
}

export interface PageItemProps {
    page: number;
    key?: number;
    active: boolean;
    onClick: (page: number) => void;
}

export interface UsePaginationItemsProps {
    totalPage: number;
    currentPage: number;
    onChangePage: (page: number) => void;
    pageEllipsis: number;
  }