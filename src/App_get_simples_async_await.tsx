import { useState, useEffect } from "react";
import { Movie } from './types/Movie';

function App() {
  // States
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  // Use Efect
  useEffect(() => {
    loadMovies();
  }, []);

  // Funções
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((e) => {
        setLoading(false);
        setMovies([]);
        console.log(e);
      });
  }

  // const loadMovies = async () => {
  //   try {
  //     setLoading(true);
  //     let response = await fetch('https://api.b7web.com.br/cinema/');
  //     let json = await response.json();
  //     setLoading(false);
  //     setMovies(json);
  //   } catch (e) {
  //     setLoading(false);
  //     setMovies([]);
  //     console.log(e);
  //   }

  // }

  return (
    <div>

      {loading &&
        <div>Carregando...</div>
      }
      {!loading && movies.length > 0 &&
        <>
          <div>Total de Filmes: {movies.length}</div>
          <div className="grid grid-cols-6 gap-3">
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} alt="" className="w-32 block" />
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      }

      {!loading && movies.length === 0 &&
        <div>Tente mais tarde novamente</div>
      }
    </div>
  )
}

export default App