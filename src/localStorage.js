const setData = (name, object) => {
    localStorage.setItem( name, JSON.stringify(object));
}

const lookData = (object) => {
    const data = localStorage.getItem(object);
    if(data) {
        return JSON.parse(data);
    }
    else {
        return null;
    }
}
export {setData, lookData};