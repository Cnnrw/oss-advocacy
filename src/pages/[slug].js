import fs                          from 'fs'
import matter                      from 'gray-matter'
import { MDXRemote }               from 'next-mdx-remote'
import { serialize }               from 'next-mdx-remote/serialize'
import path                        from 'path'
import { Box, Container, Heading } from 'theme-ui'

import SEO                                from '@components/SEO'
import Layout                             from '@layouts/BaseLayout'
import { contentFilePaths, CONTENT_PATH } from '@utils/mdxUtils'

const PostPage = ({ slug, source, frontMatter }) => {
  return (
    <>
      <SEO key={`seo-${slug}`}
           title={frontMatter.title}
           description={frontMatter.description} />

      <Box as='article'
           id='Article'
           className={'ArticlePage ' + (frontMatter.section ?? '')}
           bg='white'
           py={[1, 2]}>

        <Heading as='h1' id='Article Title' mt={6} mb={3}>{frontMatter.title}</Heading>

        {frontMatter.date && (
          <Heading color='black' variant='styles.label' mb={4}>{frontMatter.date}</Heading>
        )}

        <Container
          as='section'
          id='Article Content'
          sx={{
            wordWrap: 'break-word'
          }}>

          <Box maxWidth='text'>
            <MDXRemote {... source} />
          </Box>

        </Container>
      </Box>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(CONTENT_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug
    }
  }
}

export const getStaticPaths = async () => {
  const paths = contentFilePaths
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.mdx?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

PostPage.Layout = Layout

export default PostPage
