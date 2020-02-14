import React, { useState } from "react";
import FilterCategory from './filterCategory/filterCategory'
import FormGroup from '@material-ui/core/FormGroup';
import FilterBrand from './filterBrand/filterBrand'
import "./filter.css";

function Filter() {

  const [category, setCategory] = useState([
    {
      name: 'Zapatos'
    },
    {
      name: 'Franelas'
    },
    {
      name: 'Shorts'
    },
    {
      name: 'Balones'
    }
  ]);
  const [brand, setBrand] = useState([
    {
      name: 'Nike'
    },
    {
      name: 'Adidas'
    },
    {
      name: 'Puma'
    },
    {
      name: 'NewBalance'
    }
  ]);


  return (
    <div className="section-filters">
      <FormGroup>
        <div className="section-filter-type">
          <h5>Categorias</h5>
          {
            category.map((itemCategory,index) =>
              <div key={itemCategory.name}>
                <FilterCategory 
                  itemCategory={itemCategory} 
                  index={index}
                  setCategory={setCategory}
                  category={category}/>
              </div>
            )
          }
        </div>
        <div className="section-filter-type">
          <h5>Marcas</h5>
          {
            brand.map((itemBrand,index) =>
              <div key={itemBrand.name}>
                <FilterBrand 
                  itemBrand={itemBrand} 
                  index={index}
                  setBrand={setBrand}
                  brand={brand}/>
              </div>
            )
          }
        </div>
    </FormGroup>
    </div>
  );
}

export default Filter;
