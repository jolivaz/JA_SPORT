import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function FilterCategory({itemCategory, index, setCategory, category}) {

  const handleChangeCategory = (e,index) => {
    e.preventDefault()
    let newCategory = category
    newCategory[index].active  = !newCategory[index].active
    setCategory(newCategory)
  };

  return (
    <div>
        <FormControlLabel 
            control={<Checkbox checked={itemCategory.active} 
            value={itemCategory.name} 
            onChange={e => handleChangeCategory(e,index)} />} 
            label={itemCategory.name} />
    </div>

  );
}

export default FilterCategory;
