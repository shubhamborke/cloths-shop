const changeQuantityColor = (num) => {
    if(num%10 === 0){
        return "color10";
    }else{
        return `color${(num%10)}`;
    }
}

export default changeQuantityColor;
