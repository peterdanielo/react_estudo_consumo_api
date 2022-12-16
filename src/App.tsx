import { useState, useEffect } from "react";
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { Post } from './types/Post';
import { api } from "./api";

function App() {
  // States
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);


  // Use Efect
  useEffect(() => {
    loadPosts();
  }, []);

  // Funções
  //get all posts
  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  // Add new post
  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if (json.id) {
      alert("Post adicionado com suceso!");
    } else {
      alert("Ocorreu um erro!")
    }

  }

  return (
    <div className="p-5">

      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div className="my-4">
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir</div>
      }
    </div>
  )
}

export default App