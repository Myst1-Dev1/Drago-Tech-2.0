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
  
  export type Product = {
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
    inoffer: {
      isoffer:boolean;
      priceoffer:number;
    }
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
  
 export type ProductsData = {
    produtos: {
      nodes: ProductNode[];
    };
  }