import { gql } from "@apollo/client";

export const getProducts = gql`
    query NewQuery {
        produtos(first:14) {
            nodes {
            produtos {
                brand
                category
                description
                id
                popularProduct
                productName
                price
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
                slug
            }
        }
}
`