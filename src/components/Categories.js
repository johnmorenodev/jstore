import { useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import useFetchDB from '../hooks/useFetchDB';

function Categories() {
  const params = useParams();
  const [products, setProducts] = useFetchDB(
    [],
    `categories/${params.categoryNum}/${params.categoryName}`
  );

  console.log(params);
  console.log(`categories/${params.categoryNum}/${params.categoryName}`);

  return products.map((prod, index) => {
    return (
      <ProductsCard key={prod.id} prod={prod} params={params} index={index} />
    );
  });
}

export default Categories;
