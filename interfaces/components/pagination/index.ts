export interface PaginationProps {
  visiblePages: number;
  customRedirect: (offset: number) => Record<string, any>;
}
