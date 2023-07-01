import { PhotosService, PostService, TodoService } from "./02-open-close-b";


(async () => {

    const todoService = new TodoService();
    const postService = new PostService();
    const photosService = new PhotosService();

    const todos = await todoService.getTodoItems();
    const post = await postService.getPosts();
    const photos = await photosService.getPhotos();

    console.log( {todos, post, photos } )

})();