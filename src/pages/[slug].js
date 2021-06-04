import fs                          from 'fs'
import matter                      from 'gray-matter'
import { MDXRemote }               from 'next-mdx-remote'
import { serialize }               from 'next-mdx-remote/serialize'
import path                        from 'path'
import { Box, Heading } from 'theme-ui'

import SEO                                from '@components/SEO'
import Layout                             from '@layouts/BaseLayout'
import { contentFilePaths, CONTENT_PATH } from '@utils/mdxUtils'

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

        <section className='container'>

          {/*----- Post content -----*/}
          <section className='content'>

              <Heading mt={6}
                       mb={3}
              >
                {frontMatter.title}
              </Heading>
              <Heading color='black' variant='styles.label' mb={5}>
                {frontMatter.date}
              </Heading>
            <Box maxWidth='text' px={[4, 4, 5]}>
              <MDXRemote {...source} />
            </Box>
          </section>
        </section>
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
