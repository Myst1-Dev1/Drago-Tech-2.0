type ProductImage = {
    node: {
      mediaItemUrl: string;
    };
  }
  
 export type SimilarProduct = {
    id: number;
    slug:string;
    produtos: {
      image: ProductImage;
    };
  }

  export type Comment = {
      nodes: [
        {
          author: {
            node: {
              name:string;
            }
          };
          content:string;
          date:string;
        }
      ]
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
    comments: Comment;
    slug:string;
    databaseId:number;
  }
  
 export type ProductsData = {
    produtos: {
      nodes: ProductNode[];
    };
  }