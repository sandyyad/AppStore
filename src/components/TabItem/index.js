// Write your code here
// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, updateActiveCategory} = props
  const {displayText, tabId} = eachTabItem

  const onGetUpdate = () => {
    updateActiveCategory(tabId)
  }
  return (
    <li className="tab-list-el">
      <button onClick={onGetUpdate} className="button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
