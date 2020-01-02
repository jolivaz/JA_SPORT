import React, { useState,useEffect } from 'react'
import { filterBrandsProductsAction } from '../../../actions/productsActions'
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function FilterBrand({itemBrand, index, setBrand, brand}) {

    //dispatch filter
    const dispatch = useDispatch();
    const agregarBusqueda = (filter) => dispatch( filterBrandsProductsAction(filter) );

  const handleChangeBrand = (e,index) => {
    e.preventDefault()
    let newBrand = brand
    newBrand[index].active  = !newBrand[index].active
    setBrand(newBrand)
    agregarBusqueda(brand)
  };

  return (
    <div>
        <FormControlLabel 
            control={<Checkbox checked={itemBrand.active} 
            value={itemBrand.name} 
            onChange={e => handleChangeBrand(e,index)} />} 
            label={itemBrand.name} />
    </div>

  );
}

export default FilterBrand;
