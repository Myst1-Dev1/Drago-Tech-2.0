type ProductImage = {
    node: {
      mediaItemUrl: string;
    };
  }
  
  type SimilarProduct = {
    id: number;
    produtos: {
      image: ProductImage;
    };
  }
  
  type Product = {
    brand: string;
    category: string[];
    description: string;
    id: number;
    popularProduct: boolean;
    productName: string;
    slug:string;
    image: {
      node: {
        mediaItemUrl: string;
      };
    };
    price: number;
    recomendedProduct: boolean;
    similarProducts: {
      itens: {
        nodes: SimilarProduct[];
      };
    };
  }
  
 export type ProductNode = {
    produtos: Product;
    slug:string;
  }
  
  type ProductsData = {
    produtos: {
      nodes: ProductNode[];
    };
  }