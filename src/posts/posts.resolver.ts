import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PostsService } from "./posts.service";
import { AddCommentInpute } from "src/graphql";

@Resolver()
export class PostsResolver {

    constructor(private postService: PostsService){}

    @Query()
    getPosts(){
        return this.postService.getPosts();
    }
    
    @Mutation()
    createPosts(@Args('title')title: string, @Args('content')content: string,){
        return this.postService.createPosts(title,content)
    }

    @Mutation()
    addComment(@Args('input'){postId,text,user}:AddCommentInpute, ){
        return this.postService.addComment(postId,text,user)
    }
    

}