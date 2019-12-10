import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';
import './filter.css';

class ProductFilterItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  buttonClickHandle = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { title, children } = this.props;
    return (
      <>
        <div className={`product-filter__item ${this.state.open ? `option-show` : ``}`}>
          <button type="button" className="button option-show-button" onClick={this.buttonClickHandle}>
            <span>{title}</span>
            <span className={`arrow ${this.state.open ? `arrow-up` : `arrow-down`}`} />
          </button>
          {children}
        </div>
      </>
    )
  }
}

ProductFilterItem.propTypes = {
  title: PropTypes.string.isRequired
};
class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOpen: false,
      /*данные отфильтрованных полей хранятся в состоянии */
      inputPrice: { min: 100, max: 400 }, /*данные диапазона цены */
      inputColor: [],                     /* выбранные цвета */
      inputCollection: []                 /* выбранные коллекции */
    }
  }
  filterActivateClick = () => {
    this.setState({
      filterOpen: !this.state.filterOpen
    });
  }
  colorChangeHandler = (e) => {
    const colors = this.state.inputColor;
    const value = e.target.value;
    if (colors.includes(value)) {
      const index = colors.indexOf(value);
      colors.splice(index, 1);
    } else {
      colors.push(value)
    }
    this.setState({
      inputColor: colors
    })
  }
  collectionChangeHandler = (e) => {
    const collection = this.state.inputCollection;
    const value = e.target.value;
    if (collection.includes(value)) {
      const index = collection.indexOf(value);
      collection.splice(index, 1);
    } else {
      collection.push(value)
    }
    this.setState({
      inputCollection: collection
    });
  }
  resetButtonClick = () => {
    this.setState({
      inputPrice: { min: 100, max: 400 },
      inputColor: [],
      inputCollection: []
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
            <span className={"arrow" + (opened ? " arrow-up" : " arrow-down")} />
          </button>
        </div>
        <form className={"product-filter__option" + (opened ? " open" : "")}>
          <ProductFilterItem title={'Price'}>
            <InputRange
              step={10}
              maxValue={500}
              minValue={0}
              value={this.state.inputPrice}
              formatLabel={value => `${value} $`}
              onChange={value => this.setState({ inputPrice: value })}
            />
          </ProductFilterItem>
          <ProductFilterItem title={'Color'}>
            <div className="selection-color" onChange={this.colorChangeHandler}>
              <input type="checkbox" id="silver" value="silver" />
              <label htmlFor="silver" className="checkbox-color checkbox-color--silver" />
              <input type="checkbox" id="blue-gray" value="blue-gray" />
              <label htmlFor="blue-gray" className="checkbox-color checkbox-color--blue-gray" />
              <input type="checkbox" id="gray" value="gray" />
              <label htmlFor="gray" className="checkbox-color checkbox-color--gray" />
              <input type="checkbox" id="black" value="black" />
              <label htmlFor="black" className="checkbox-color checkbox-color--black" />
              <input type="checkbox" id="white-gray" value="white-gray" />
              <label htmlFor="white-gray" className="checkbox-color checkbox-color--white-gray" />
              <input type="checkbox" id="blue" value="blue" />
              <label htmlFor="blue" className="checkbox-color checkbox-color--blue" />
            </div>
          </ProductFilterItem>
          <ProductFilterItem title={'Collection'}>
            <div className="selection-collection" onChange={this.collectionChangeHandler}>
              <input type="checkbox" id="casual" value="casual" />
              <label htmlFor="casual" className="selection-collection__label">Casual</label>
              <input type="checkbox" id="classic" value="classic" />
              <label htmlFor="classic" className="selection-collection__label">Classic</label>
              <input type="checkbox" id="petite" value="petite" />
              <label htmlFor="petite" className="selection-collection__label">Petite</label>
              <input type="checkbox" id="soulluxe" value="soulluxe" />
              <label htmlFor="soulluxe" className="selection-collection__label">Soulluxe</label>
            </div>
          </ProductFilterItem>
          <button type="button" className="button black-button show-filtred-product-button">
            Apply ({count} products)
          </button>
          <button type="reset" className="button clean-filter-button" onClick={this.resetButtonClick}>
            Clear all
          </button>
        </form>
      </div>
    );
  }
}
export default Filter