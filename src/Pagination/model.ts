import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface PaginationItemSetting {
    itemWidth: number ,
    itemHeight: number,
    fontSize?: number
}

export type StyleProps = HTMLAttributes<HTMLDivElement> & {
    setting?: PaginationItemSetting | any,
}

export interface PaginationProps {
    currentPage: number | 1;
    onChangePage: (currentPage: number) => void;
    totalRow: number,
    pageSize: number,
    setPageSize?: Dispatch<SetStateAction<number>>,
    setting?: PaginationItemSetting,
    showSizeCharger?: boolean
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

  }