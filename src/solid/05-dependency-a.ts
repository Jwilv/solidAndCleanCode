import { PostService } from "./05-dependency-b";
import { JsonDataBaseService } from './05-dependency-c';


(async () => {
    const provider = new JsonDataBaseService()
    const postService = new PostService( provider )

    const post = await postService.getPosts()

    console.log({post})
}
)();