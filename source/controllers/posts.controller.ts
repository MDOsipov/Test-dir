import { Request, Response, NextFunction } from "express";
interface post {
    owner: string;
    value: string;
}

let posts: post[] = [];

posts.push({ owner: 'Mikle', value: 'Hello, world!' });

async function getPosts(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({
        posts: posts
    });
}

export default { getPosts };