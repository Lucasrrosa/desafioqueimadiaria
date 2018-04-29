import Axios from 'axios'

const generos = [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 16, name: 'Animação' },
    { id: 35, name: 'Comédia' }
]
const buscarFilmes = {
    buscarPorGenero: (genero) => {
        const generoId = generos.filter((item) => (genero === item.name))
        const urlPesquisa = `https://api.themoviedb.org/3/genre/${generoId[0].id}/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        Axios.get(urlPesquisa)
            .then((resposta) => {
                return resposta.data.result
            })
    },
    buscarPorTermo: () => {

    },
    buscarRecentes: () => {

    }
}
export default buscarFilmes