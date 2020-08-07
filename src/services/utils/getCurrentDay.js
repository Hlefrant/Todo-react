const getCurrentDay =  () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const day = dd + '/' + mm + '/' + yyyy;

    return day
}

export default getCurrentDay