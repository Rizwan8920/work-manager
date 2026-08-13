import { httpAxios } from "@/helper/httpHelper";

export async function createTask(task) {
  const result = await httpAxios
    .post("/api/works", task)
    .then((response) => response.data);

  return result;
}
