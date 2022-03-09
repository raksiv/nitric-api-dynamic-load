import { api } from "@nitric/sdk";

const animalsApi = api("main");

animalsApi.get("/hello/:animal", async (ctx) => {
  const { animal } = ctx.req.params;
  const path = `../animals/${animal}/greeting`;

  try {
    const handler = await require(path);
    ctx.res.json({
      message: `${handler.sayHello()}`,
    });
  } catch (error) {
    ctx.res.json({
      message: `No greeting module found for animal - ${animal}`,
    });
    ctx.res.status = 501;
  }
});
