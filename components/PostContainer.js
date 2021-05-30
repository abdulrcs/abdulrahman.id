import styled from '@emotion/styled'
import { Stack } from '@chakra-ui/react'

const PostContainer = styled(Stack)`
  &&& {
    max-width: 960px;
    padding: 24px;
    font-size: 18px;
    line-height: 1.4;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    * + * {
      margin-top: 1.2rem;
    }
    p {
      column-count: 1;
      color: rgba(255, 255, 255, 0.82);
    }
    a {
      text-decoration: none;
      color: secondary;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    blockquote {
      padding: 16px;
      color: rgba(255, 255, 255, 0.82);
      border-left: 0.25em solid;
      border-color: #3ccf91;
      background: #12141d;
    }
    blockquote p {
      font-style: italic;
    }
    h1 {
      font-size: 2em;
      + * {
        margin-top: 1em;
      }
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.17em;
    }
    h4 {
      font-size: 1em;
    }
    h5 {
      font-size: 0.83em;
    }
    h6 {
      font-size: 0.67em;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
      line-height: 1.1;
      + * {
        margin-top: 1rem;
      }
    }
    strong {
    }
    li {
      margin-top: 0.25rem;
      margin-left: 2rem;
    }
    img {
      display: block;
      margin: auto;
    }
  }
`
export default PostContainer
