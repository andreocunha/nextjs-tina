import Link from 'next/link';
import { getAllRooms } from '../../lib/api';

export default function Rooms(props) {
  const data = props.data ? props.data : [];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {data?.map((room) => (
        <a href='#'>
        <Link href="/room/[quarto]" as={`/room/${room?.rooms?.slug}`} key={room?.rooms?.nome_quarto}>
          <div style={{ borderStyle: 'solid', margin: 10 }}>
            <h2>{room?.rooms?.nome_quarto}</h2>
            <p>{room?.rooms?.descricao_quarto}</p>
            <img src={room?.rooms?.imagem_quarto} alt={room?.rooms?.nome_quarto} width={150} />
          </div>
        </Link>
        </a>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await getAllRooms();

  return {
    props: { data },
  }
}
