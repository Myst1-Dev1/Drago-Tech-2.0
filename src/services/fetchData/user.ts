import { parseCookies } from "nookies";

const cookies = parseCookies();

let dataUser:any = null;

try {
  const rawUser = cookies["user-token"];
  dataUser = rawUser ? JSON.parse(rawUser) : null;
} catch (error) {
  console.error("Erro ao tentar parsear cookie user-token:", error);
  dataUser = null;
}

export { dataUser };