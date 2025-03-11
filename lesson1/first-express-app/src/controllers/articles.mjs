// articles
export const getArticlesHandler = (req, res) => {
  res.end('Get Articles Route')
}

export const postArticlesHandler = (req, res) => {
  res.end('Post Articles Route')
}

// articles/:articleId
export const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`Get Article by ID Route: ${articleId}`)
}

export const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`Delete Article by ID Route: ${articleId}`)
}

export const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`Put Article by ID Route: ${articleId}`)
} 
