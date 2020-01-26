import React, {useCallback, useMemo, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import PropTypes from 'prop-types'

function Restaurants(props) {
  Restaurants.propTypes = {
    [props.restaurants]: PropTypes.array,
  }

  Restaurants.defaultProps = {
    [props.restaurants]: [],
  }

  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  const restaurant = useMemo(() => {
    return props.restaurants.find(restaurant => restaurant.id === currentId)
  }, [currentId, props.restaurants])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
