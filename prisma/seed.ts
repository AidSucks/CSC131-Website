import {PrismaClient} from "@prisma/client";
import {Pool} from "@neondatabase/serverless";
import {PrismaNeon} from "@prisma/adapter-neon";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

const prisma = new PrismaClient({ adapter });

async function main() {

  await prisma.authorizedUser.create({
    data: {
      email: "ron.smithey@lpl.com",
      role: "ADMINISTRATOR",
      username: "Ron Smithey"
    }
  });

  await prisma.businessInformation.create({
    data: {
      id: "1",
      businessEmail: "ron.smithey@lpl.com",
      businessPhone: "(714) 202-9858",
      linkedin: "https://www.linkedin.com/in/ron-smithey/",
      youtube: "https://www.youtube.com/@RonSmithey",
      twitterX: "https://x.com/RonSmitheyLPL",
      businessAddress: "5101 East La Palma Avenue, Suite #202-D, Anaheim Hills, CA 92807"
    }
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })