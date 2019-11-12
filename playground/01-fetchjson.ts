import axios from "axios";
const url = "http://jsonplaceholder.typicode.com/comments/1";

interface Comments {
  id: Number;
  name: String;
  email: String;
}

axios.get(url).then(res => {
  const comment = res.data as Comments;

  console.log(`id: ${comment.id}
name: ${comment.name}
email:${comment.email}`);
});
