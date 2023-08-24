import { LIMIT_ITEMS } from "@/constants/client";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { calculateInitialPage } from "./utils";
import { MAX_ITEMS_PAGINATION } from "@/constants/pagination";
import { PaginationProps } from "@/interfaces/components/pagination";
import './styles.scss';

const Pagination = ({ visiblePages, customRedirect }: PaginationProps) => {
  const router = useRouter();
  const { offset: offsetInitial } = router.query;

  const [currentPage, setCurrentPage] = useState(calculateInitialPage(offsetInitial as string));
  const [visibleItemPages, setvVisibleItemPages] = useState<number[]>([]);
  const [firstRender, setFirstRender] = useState(true);

  const updateVisiblePages = (page: number) => {
    if (page >= visiblePages) return;

    const allPages = Array.from({ length: visiblePages }, (_, index) => index);
    setvVisibleItemPages(allPages.slice(page, page + MAX_ITEMS_PAGINATION));
  }

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    const lastPage = visibleItemPages[visibleItemPages.length - 1];

    if (nextPage > visiblePages) return;
    if (nextPage > lastPage) updateVisiblePages(nextPage);
    setCurrentPage(nextPage);
  };

  const goToPreviousPage = () => {
    const cutPoint = currentPage - MAX_ITEMS_PAGINATION;
    const previousPage = currentPage - 1;
    const firstPage = visibleItemPages[0];

    if (previousPage < 0) return;
    if (previousPage < firstPage ) updateVisiblePages(cutPoint >= 0 ? cutPoint : 0);
    setCurrentPage(previousPage);
  };

  useEffect(() => {
    updateVisiblePages(currentPage)
  }, [visiblePages]);

  useEffect(() => {
    if(firstRender) return setFirstRender(false);

    const offset = currentPage * LIMIT_ITEMS;

    router.push(customRedirect(offset))
  }, [currentPage]);
  
  const ifFirstPage = useMemo(() => !currentPage, [currentPage]);
  const lastPage = useMemo(() => currentPage + 1 >= visiblePages, [currentPage])

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
          visibleItemPages.map((pageNumber) => (
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
