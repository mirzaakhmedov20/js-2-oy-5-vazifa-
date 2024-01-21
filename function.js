function validate(name, price, category) {
    if (!name.value) {
      alert("Name is empty");
      name.focus();
      return false;
    }
  
    if (name.value.trim().length < 3) {
      alert("Name length should be more than 3 char");
      name.focus();
      name.value = "";
      return false;
    }
  
    if (!price.value) {
      alert(" Price is empty");
      price.focus();
      return false;
    }
  
    if (!Number(price.value)) {
      alert(" price should be number");
      price.focus();
      return false;
    }
  
    if (!category.value) {
      alert(" Category os empty");
      category.focus();
      return false;
    }
  
    return true;
  }

  export{validate};