import fs                                         from 'fs'
import matter                                     from 'gray-matter'
import path                                       from 'path'
import React                                      from 'react'
import { Box, Container, Divider, Heading, Text } from 'theme-ui'

import Link                               from '@components/Link'
import Layout                             from '@layouts/BaseLayout'
import { contentFilePaths, CONTENT_PATH } from '@utils/mdxUtils'

const Index = ({ pages }) =>
  <Container px={[1, 2]}>

    <Box px={[4, 4, 6]}>

    <Heading mt={6}
             mb={3}>
    </Heading>

    <ul>
      {pages.map((post) => (
        <li key={post.filePath}
            style={{
              cursor: 'pointer'
            }}
        >
          <Link href={`/${post.filePath.replace(/\.mdx?$/, '')}`}>
            {post.data.title}
          </Link>
        </li>
      ))}
    </ul>
    </Box>
  </Container>

export function getStaticProps() {
  const pages = contentFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(CONTENT_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  return { props: { pages } }
}

Index.Layout = Layout

export default Index
