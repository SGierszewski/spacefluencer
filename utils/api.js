// Get rover data from API
export async function getPhotos(rover, date) {
  const promise = fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${
      import.meta.env.VITE_API_KEY
    }&earth_date=${date}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.photos;
}

export async function getRoverInfo(name) {
  const promise = fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.rover;
}
