import { getData } from "../../lib/api";
import { useTina } from 'tinacms/dist/edit-state'


export default function Room(props){
  const { data } = useTina({
    query: `{
      rooms(relativePath: "${props?.slug}"){
        nome_quarto,
        descricao_quarto,
        imagem_quarto
      }
    }`,
    variables: {},
    data: props?.data? props?.data : {},
  })

  console.log(data)
  
  return(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Quarto</h1>
      <h1>{data?.rooms.nome_quarto}</h1>
      <p>{data?.rooms.descricao_quarto}</p>
      <img src={data?.rooms.imagem_quarto} alt={data?.rooms.nome_quarto} width={150} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const quarto = context.query.quarto;
  const data = await getData("rooms", quarto, "nome_quarto, descricao_quarto, imagem_quarto");

  return {
    props: {
      data: data,
      slug: quarto,
    }
  }
}