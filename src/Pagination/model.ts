export interface PaginationProps {
    currentPage: number | 1;
    onChangePage: (currentPage: number) => void;
    size?: 'sm' | "lg";
    totalRow: number,
    pageSize: number,
}