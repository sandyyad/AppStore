import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails

  return (
    <li className="app-container">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-para">{appName}</p>
    </li>
  )
}

export default AppItem
