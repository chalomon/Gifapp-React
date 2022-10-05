export const GifItem = ({title, url, id}) => {


  return (
    <div className="card">
        <a href={url} target="_blank"><img src={url} alt={title} /></a>
        <p>{title}</p>
    </div>
    
  )
}
