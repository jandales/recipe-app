import http from './http'

function toFormData(payload, imageFile) {
  const fd = new FormData()
  fd.append('name', payload.name || '')
  fd.append('description', payload.description || '')
  fd.append('status', payload.status || 'public')
  fd.append('cookTime', payload.cookTime || '')
  fd.append('prepTime', payload.prepTime || '')
  fd.append('difficulty', payload.difficulty || '')
  fd.append('servings', payload.servings || '')

  const ingredients = (payload.ingredients || []).filter(Boolean)
  const instructions = (payload.instructions || []).filter(Boolean)

  // Send as JSON strings — backend will coerce
  fd.append('ingredients', JSON.stringify(ingredients))
  fd.append('instructions', JSON.stringify(instructions))

  if (imageFile) {
    fd.append('image', imageFile)
  }

  return fd
}

export async function listRecipes(page = 0) {
  const { data } = await http.get('/recipes', { params: { page } })
  return data
}

export async function searchRecipes(keyword) {
  const { data } = await http.get(`/recipes/search/${encodeURIComponent(keyword)}`)
  return data
}

export async function getRecipe(id) {
  const { data } = await http.get(`/recipe/${id}`)
  return data
}

export async function createRecipe(payload, imageFile) {
  const { data } = await http.post('/recipe/store', toFormData(payload, imageFile))
  return data
}

export async function updateRecipe(id, payload, imageFile) {
  const { data } = await http.put(`/recipe/update/${id}`, toFormData(payload, imageFile))
  return data
}

export async function deleteRecipe(id) {
  const { data } = await http.delete(`/recipe/destroy/${id}`)
  return data
}

export async function recipesByUser(userId, page = 0) {
  const { data } = await http.get(`/recipes/user/${userId}`, { params: { page } })
  return data
}

export async function toggleSaved(id) {
  const { data } = await http.put(`/recipes/${id}/saved`)
  return data
}

export async function savedRecipes(userId, page = 0) {
  const { data } = await http.get(`/recipes/saved/user/${userId}`, { params: { page } })
  return data
}
