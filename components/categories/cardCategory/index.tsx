import Image from "next/image";
import Link from "next/link";
import { CardCategoryProps } from "@/interfaces/components/category";
import './styles.scss';

const CardCategory = ({ url, title, id }: CardCategoryProps) => (
  <Link href={{ pathname: `/category/${id}`, query: { offset: 0 } }} data-testid={title}>
    <article className="card-category" data-testid="card-category">
      <Image src={url} alt={title} width={400} height={450} />
      <h3 className="card-category__title">{title}</h3>        
    </article>
  </Link>
);

export default CardCategory;
