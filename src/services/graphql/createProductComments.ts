import { gql } from "@apollo/client";

export const createProductComments = gql`
    mutation MyMutation($commentOn:Int!, $author:String!, $content:String!) {
        createComment(input: {commentOn: $commentOn, author: $author, content: $content}) {
            comment {
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
    }
`