import { prisma } from "~server/db";

async function main() {
  await prisma.example.create({
    data: {
      name: "Example",
    },
  });
}

main()
  .then(() => {
    console.log("Example seed complete");
  })
  .catch((e) => {
    console.error("Error in Example seed:", e);
  });
