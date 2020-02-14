import React from 'react'
import { filterBrandsProductsAction } from '../../../actions/productsActions'
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
    let brandActive = []
    newBrand[index].active  = !newBrand[index].active
    setBrand(newBrand)
    newBrand.map(brand =>
      brand.active && brandActive.push(brand.name) 
    )
    agregarBusqueda(brandActive)
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
