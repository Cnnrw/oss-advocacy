import fs   from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const CONTENT_PATH = path.join(process.cwd(), '/content')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const contentFilePaths = fs.readdirSync(CONTENT_PATH).filter((path) => /\.mdx?$/.test(path))/* Only include md(x) files*/
