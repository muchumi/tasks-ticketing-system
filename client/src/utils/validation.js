const validateText = (str) => {
    return str.length >= 3 && str.length <= 1000;
}

export default validateText;