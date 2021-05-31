import fs                          from 'fs'
import matter                      from 'gray-matter'
import { MDXRemote }               from 'next-mdx-remote'
import { serialize }               from 'next-mdx-remote/serialize'
import dynamic                     from 'next/dynamic'
import Head                        from 'next/head'
import path                        from 'path'
import { Box, Container, Heading } from 'theme-ui'

import SEO                           from '@components/SEO'
import Layout                        from '@layouts/BaseLayout'
import { UIComponents }              from '@layouts/Theme'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'


// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  ... UIComponents,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Globe: dynamic(() => import('@components/Globe/Globe')),
  Head
}

const PostPage = ({ slug, source, frontMatter }) => {
  return (
    <>
      <SEO key={`seo-${slug}`}
           title={frontMatter.title}
           description={frontMatter.description} />

      <Box bg='white'
           py={[1, 2]}
           as='article'
           className={'ArticlePage ' + frontMatter.section}
           id='Article'>

        {/*----- Cover image only on blog -----*/}
        {/*{frontMatter.section === 'blog' && (*/}
        {/*  <Cover image={post.frontmatter.cover_image} />*/}
        {/*)}*/}

        <Container as='section'>

          {/*----- Post content -----*/}
          <section className='content'>
            <Box px={[4, 4, 6]}>

              <Heading mt={6} mb={3}>
                {frontMatter.title}
              </Heading>
              <Heading color='black' variant='styles.label' mb={5}>
                {frontMatter.date}
              </Heading>
            </Box>
            <Box maxWidth='text' px={[4, 4, 6]}>
              <MDXRemote {... source} components={components} />
            </Box>
          </section>
        </Container>
      </Box>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
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
  const paths = postFilePaths
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
