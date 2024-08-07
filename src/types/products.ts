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
  }
  
  type ProductsData = {
    produtos: {
      nodes: ProductNode[];
    };
  }