import data from "../../../public/data/clientInfo.json"

export async function fetchClientInfo() {
  return data;
}

// When the database is set up, we can use the below function.
// export async function fetchClientInfo() {
//   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/client-info");
//   const data =  await response.json();

//   return data;
// }