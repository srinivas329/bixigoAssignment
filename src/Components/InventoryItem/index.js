import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

import InventoryDetails from '../InventoryDetails'

import './InventoryItem.css'

const InventoryItems = prop => {
  const {
    inventoryItemDetails,
    checkingInventoryItem,
    isInventoryItemChecked,
    isChecked,
  } = prop
  const {id, displayName, category} = inventoryItemDetails
  const inventoryDetailsItemCountArray = category.map(each => each.items.length)
  const itemsCount = inventoryDetailsItemCountArray.reduce((a, b) => a + b)

  const onClickingDropDownIcon = () => checkingInventoryItem(id)

  const toDisplayFurnitureItems = (
    <ul className="Inventory-ul-list">
      {category.map(each => (
        <InventoryDetails itemDetails={each} key={each.id} />
      ))}
    </ul>
  )

  return (
    <li className="inventory-list-item">
      <div className="inventory-container">
        <div className="item-name-tab">
          <h1 className="item-heading">{displayName}</h1>
          <div className="count-tab">
            <p className="items-count">{itemsCount}</p>
          </div>
        </div>
        <button
          type="button"
          className="arrow-btn"
          onClick={onClickingDropDownIcon}
        >
          {isInventoryItemChecked && isChecked ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </button>
      </div>
      {isInventoryItemChecked && isChecked ? toDisplayFurnitureItems : ''}
    </li>
  )
}

export default InventoryItems
