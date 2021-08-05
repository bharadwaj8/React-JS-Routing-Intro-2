import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <div className="blog-item-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="blog-desc">{description}</p>
      <hr className="line" />
    </div>
  )
}

export default BlogItem
