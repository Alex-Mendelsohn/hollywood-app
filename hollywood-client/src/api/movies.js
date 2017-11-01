const CREATE_URL = (path = "") => `http://localhost:4040/api/movies${path}`;

export const getAll = id => {
  return fetch(CREATE_URL(id))
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
export const getById = () => {
  return fetch(CREATE_URL())
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
export const create = data => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
export const update = (id, data) => {
  return fetch(CREATE_URL(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
export const remove = id => {
  return fetch(CREATE_URL(id), {
    method: "DELETE"
  })
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};

export const addActor = (id, data) => {
  return fetch(CREATE_URL(`${id}/actor`), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
export const removeActor = (id, data) => {
  return fetch(CREATE_URL(`${id}/actor`), {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(reposne => reposne.json())
    .catch(error => console.log(error));
};
