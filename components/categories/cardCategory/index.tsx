import Image from "next/image";
import Link from "next/link";
import { CardCategoryProps } from "@/interfaces/components/category";

const CardCategory = ({ url, title, id }: CardCategoryProps) => (
  <Link href={{ pathname: `/category/${id}`, query: { offset: 0 } }} data-testid={title}>
    <article className="position-relative" data-testid="card-category">
      <Image src={url} alt={title} width={400} height={450} />
      <h3 className="bg-body-tertiary shadow-sm p-3 mb-5 bg-body-tertiary position-absolute top-50 z-1 w-100 text-center">{title}</h3>        
    </article>
  </Link>
);

export default CardCategory;
