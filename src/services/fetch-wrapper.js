export default async (url, params = {}) => {
  try {
    const response = await fetch(url, params)
    if (!response.ok) throw Error('Failed to fetch')

    return response.json()
  } catch (error) {
    console.error(`
      url: ${url},
      params: ${JSON.stringify(params)},
      error: ${error}
      `);
    throw error
  }
}
