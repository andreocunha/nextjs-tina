
import { defineSchema, defineConfig } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Informacoes da Home",
      name: "home",
      path: "content/home",
      fields: [
        {
          type: "string",
          label: "Titulo",
          name: "title",
        },
        {
          type: "string",
          label: "Corpo",
          name: "body",
        },
        {
          type: "image",
          label: "Imagem",
          name: "image",
        }
      ]
    },
    {
      label: "Quartos",
      name: "rooms",
      path: "content/rooms",
      fields: [
        {
          type: "string",
          label: "Nome do Quarto",
          name: "nome_quarto",
        },
        {
          type: "string",
          label: "Descricao do Quarto",
          name: "descricao_quarto",
        },
        {
          type: "image",
          label: "Imagem do Quarto",
          name: "imagem_quarto",
        }
      ]
    },
  ],
});

export default schema

// Your tina config
// ==============
const branch = 'main'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    // cms.flags.set("experimentalData", false);
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import("tinacms").then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined;
      });
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
});
