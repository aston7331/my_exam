
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddCommentInpute {
    user?: Nullable<string>;
    text?: Nullable<string>;
    postId?: Nullable<string>;
}

export class Post {
    id?: Nullable<string>;
    title?: Nullable<string>;
    content?: Nullable<string>;
    commemts?: Nullable<Nullable<Comment>[]>;
}

export class Comment {
    user?: Nullable<string>;
    text?: Nullable<string>;
    date?: Nullable<string>;
}

export abstract class IQuery {
    abstract getPosts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;
}

export abstract class IMutation {
    abstract createPosts(title?: Nullable<string>, content?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract addComment(input?: Nullable<AddCommentInpute>): Nullable<Comment> | Promise<Nullable<Comment>>;
}

type Nullable<T> = T | null;
