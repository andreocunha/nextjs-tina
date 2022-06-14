import { getAllRooms } from '../../lib/api';

export default function Rooms(props) {
  const data = props.data ? props.data : [];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ul>
        {data?.map((room) => (
          <li key={room?.rooms?.nome_quarto}>
            <h2>{room?.rooms?.nome_quarto}</h2>
            <p>{room?.rooms?.descricao_quarto}</p>
            <img src={room?.rooms?.imagem_quarto} alt={room?.rooms?.nome_quarto} width={150} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await getAllRooms();

  return {
    props: { data },
  }
}
