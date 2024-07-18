import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="container not-page">
      <h1>Page Not Found</h1>
        <img src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="" />
        <Link to="/">
        <button className="btn btn-dark p-3 px-4 mb-4">Go To Home</button>
        </Link>
    </div>
  )
}

export default NotFoundPage