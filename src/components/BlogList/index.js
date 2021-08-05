import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {details} = props
  return (
    <div className="blog-list-container">
      {details.map(each => (
        <BlogItem key={each.id} item={each} />
      ))}
    </div>
  )
}

export default BlogList
