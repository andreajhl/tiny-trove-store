import { LIMIT_ITEMS } from "@/constants/client";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { calculateInitialPage } from "./utils";
import { MAX_ITEMS_PAGINATION } from "@/constants/pagination";
import { PaginationProps } from "@/interfaces/components/pagination";
import './styles.scss';

const Pagination = ({ totalPage }: PaginationProps) => {
  const router = useRouter();
  const { category, offset: offsetInitial } = router.query;

  const [currentPage, setCurrentPage] = useState(calculateInitialPage(offsetInitial as string));
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const [firstRender, setFirstRender] = useState(true);

  const updateVisiblePages = (page: number) => {
    if (page >= totalPage) return;

    const allPages = Array.from({ length: totalPage }, (_, index) => index);
    setVisiblePages(allPages.slice(page, page + MAX_ITEMS_PAGINATION));
  }

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    const lastPage = visiblePages[visiblePages.length - 1];

    if (nextPage > totalPage) return;
    if (nextPage > lastPage) updateVisiblePages(nextPage);
    setCurrentPage(nextPage);
  };

  const goToPreviousPage = () => {
    const cutPoint = currentPage - MAX_ITEMS_PAGINATION;
    const previousPage = currentPage - 1;
    const firstPage = visiblePages[0];

    if (previousPage < 0) return;
    if (previousPage < firstPage ) updateVisiblePages(cutPoint >= 0 ? cutPoint : 0);
    setCurrentPage(previousPage);
  };

  useEffect(() => {
    updateVisiblePages(currentPage)
  }, [totalPage]);

  useEffect(() => {
    if(firstRender) return setFirstRender(false);

    const offset = currentPage * LIMIT_ITEMS;

    router.push({ pathname: `${category}`, query: { offset } })
  }, [currentPage]);
  
  const ifFirstPage = useMemo(() => !currentPage, [currentPage]);
  const lastPage = useMemo(() => currentPage + 1 >= totalPage, [currentPage])

  return (
    <div aria-label="Page navigation w-100">
      <ul className="pagination">
        <li
          data-testid="prev-button"
          onClick={goToPreviousPage}
          className={classNames("page-item page-link", { "disabled": ifFirstPage })}
        >
          <span aria-hidden="true">&laquo;</span>
        </li>
        {
          visiblePages.map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={classNames("page-item page-link", { "active-link": currentPage === pageNumber })}
            >
              {pageNumber + 1}
            </li>
          ))
        }
        <li 
          data-testid="next-button"
          className={classNames("page-item page-link", { "disabled": lastPage })}
          onClick={goToNextPage}
        >
          <span aria-hidden="true">&raquo;</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
