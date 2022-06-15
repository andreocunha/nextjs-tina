import { staticRequest } from 'tinacms'
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'content/rooms')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getData( path, relativePath, fields ) {
  const query =`{
    ${path}(relativePath: "${relativePath}") {
      ${fields}
    }
  }`
  let data = {}
  try {
    data = await staticRequest({
      query,
      variables: { },
    })
  } catch(err) {
    console.log(err)
  }
  return data;
}

export async function getEspecificRoom(slug) {
  const query = `{
    rooms(relativePath: "${slug}"){
      nome_quarto,
      descricao_quarto,
      imagem_quarto
    }
  }`

  let data = {}
  try {
    data = await staticRequest({
      query,
      variables: { },
    })
  } catch(err) {
    console.log(err)
  }

  // add the slug to the data
  data.rooms.slug = slug;
  return data
}

export async function getAllRooms() {
  const relativePaths = getPostSlugs() // quarto1.md, quarto2.md, etc

  // get all information from each relativePath and return it in an array
  const data = await Promise.all(relativePaths.map(async (relativePath) => {
    return await getEspecificRoom(relativePath)
  }))

  return data;
}