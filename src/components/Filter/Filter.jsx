import css from './Filter.module.css'
import PropTypes from 'prop-types';

export const Filter = ({filter, onFilterChange}) => {

  return (
    <div className={css.filterWrapper}>
     <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}