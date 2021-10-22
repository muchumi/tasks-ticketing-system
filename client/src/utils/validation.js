const validateText = (str) => {
    return str.length >= 5 && str.length <= 1000;
}

export default validateText;