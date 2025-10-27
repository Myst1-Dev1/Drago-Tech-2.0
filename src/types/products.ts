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

  export type TechInfo = {
    techInfoTitle: string;
    techInfoValue: string;
  }

  export type Comments = {
    clientName: string;
    content: string;
    rating: number;
  }
  
  export type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    category: string;
    techInfo: TechInfo[];
    price: number;
    imageUrl: string;
    relatedImages: string[];
    isOffer: boolean;
    priceOffer: number;
    popularProduct: boolean;
    recomendedProduct: boolean,
    similarProduct: [],
    comments: Comments[]
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