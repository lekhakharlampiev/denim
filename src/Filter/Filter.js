import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOpen: false,
      inputPrice: { min: 0, max: 5 }
    }
  }
  filterActivateClick = () => {
    this.setState({
      filterOpen: !this.state.filterOpen
    });
  }
  render() {
    const opened = this.state.filterOpen ? true : false;
    const count = 9;
    return (
      <div className="product-filter">
        <div className="product-filter__activate">
          <button type="button" 
            className="button filter-activate-button"
            onClick={this.filterActivateClick}
          >
            <span>Filter by</span>
            <span className="arrow arrow-down" />
          </button>
        </div>
        <div className={"product-filter__option" + (opened ? " open" : "")}>
          <div className="product-option__price">
          <button type="button" className="button option-show-button">
            <span>Price</span>
            <span className="arrow arrow-down" />
          </button>
          </div>
          <div className="product-option__color">
          <button type="button" className="button option-show-button">
            <span>Color</span>
            <span className="arrow arrow-down" />
          </button>
          </div>
          <div className="product-option__collection">
          <button type="button" className="button option-show-button">
            <span>Collection</span>
            <span className="arrow arrow-down" />
          </button>
          </div>
          <button type="button" className="button black-button show-filtred-product-button">
            Apply ({count} products)
          </button>
          <button type="button" className="button clean-filter-button">
            Clear all
          </button>
        </div>
      </div>
    );
  }
}
export default Filter