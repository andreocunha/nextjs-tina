import { useTina } from 'tinacms/dist/edit-state'
import { getAllRooms, getEspecificRoom } from '../../lib/api';

export default function Room({ info, slug }) {
  // console.log(info)
  // console.log(slug)

  const { data } = useTina({
    query: `{
      rooms(relativePath: "${slug}"){
        nome_quarto,
        descricao_quarto,
        imagem_quarto
      }
    }`,
    variables: {},
    data: info,
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Quarto</h1>
      <h1>{data?.rooms?.nome_quarto || data?.nome_quarto}</h1>
      <p>{data?.rooms?.descricao_quarto || data?.descricao_quarto}</p>
      <img src={data?.rooms?.imagem_quarto || data?.imagem_quarto} alt={data?.rooms?.nome_quarto || data?.nome_quarto} width={150} />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const quarto = context.query.quarto;
//   const data = await getData("rooms", quarto, "nome_quarto, descricao_quarto, imagem_quarto");

//   return {
//     props: {
//       data: data,
//       slug: quarto,
//     }
//   }
// }

export async function getStaticProps({ params }) {
  const room = await getEspecificRoom(params.quarto)

  return {
    props: {
      info: room.rooms,
      slug: params.quarto,
    },
  }
}

export async function getStaticPaths() {
  const rooms = await getAllRooms();

  return {
    paths: rooms.map((post) => {
      return {
        params: {
          quarto: post.rooms.slug,
        },
      }
    }),
    fallback: false,
  }
}