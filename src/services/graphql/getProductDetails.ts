import { gql } from "@apollo/client";

export const getProductDetails = gql`
  query getProductDetails($slug: String!) {
    produtoBy(slug: $slug) {
    comments {
        nodes {
          author {
            node {
              ... on CommentAuthor {
                name
              }
            }
          }
          content(format: RENDERED)
          date
        }
      }
      databaseId
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
                slug
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