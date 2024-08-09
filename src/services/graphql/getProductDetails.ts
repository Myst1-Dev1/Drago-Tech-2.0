import { gql } from "@apollo/client";

export const getProductDetails = gql`
  query getProductDetails($slug: String!) {
    produtoBy(slug: $slug) {
      produtos {
        brand
        category
        description
        id
        popularProduct
        price
        productName
        recomendedProduct
        similarProducts {
          itens {
            nodes {
              ... on Produto {
                id
                produtos {
                  image {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
        image {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;