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

async function addPost(req: Request, res: Response, next: NextFunction) {
    const newPost: post = req.body;
    posts.push(newPost);
    return res.status(200).json({
        newPost: newPost
    });
}

async function updatePostByOwner(req: Request, res: Response, next: NextFunction) {
    const owner: string = req.body.owner;
    const newValue: string = req.body.newValue;
    let findFlag: boolean = false;

    posts.map(
        (elem: post) => {
            if (elem.owner === owner) {
                findFlag = true;
                elem.value = newValue;
            }
        }
    )

    if (findFlag) {
        return res.status(200).json({
            owner: owner,
            newValue: newValue
        });
    }
    else {
        return res.status(400).send("Owner didn't find");
    }
}

async function deletePostByOwner(req: Request, res: Response, next: NextFunction) {
    const owner: string = req.body.owner;

    posts = posts.filter(
        (elem: post) => {
            return elem.owner != owner
        }
    )

    return res.sendStatus(200);
}




export default { getPosts, addPost, updatePostByOwner, deletePostByOwner };