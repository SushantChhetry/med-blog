import fs from 'fs'

import path from 'path'
import {remark} from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostData(){
    //Get files name under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        //Remove .md from file name to get id
        const id = fileName.replace(/].md$/,'')

        //Read markdown file as string
        const fullPath  = path.join(postsDirectory, fileName );
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost:BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        //Combine the data with tie id
        return blogPost
    });

    //Sort posts by date
    return allPostsData.sort((a, b) => a.date< b.date ? 1 : -1)
}

export async function getPostData(id: string){
    const fullPath = path.join(postsDirectory, `${id}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //Use gray-matter to parse the post medtadata sectopm
    const matterResult = matter(fileContents);
    //remark help us generate html from markdown file
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & {contentHtml: string} = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml
    }

    //Combine the data with id
    return blogPostWithHTML
}