const getItemFromLocalStorage = () =>{
    const getItems = localStorage.getItem('readLest');

    if(getItems){
        const parsGetItem = JSON.parse(getItems);
        return parsGetItem;
    }
    else{
        return [];
    }
}

const setItemFromLocalStorage = id =>{
    const setItemStorage = getItemFromLocalStorage();
    if (setItemStorage.includes(id)) {
        alert('Already Bookmark This Book');
    }
    else{
        setItemStorage.push(id);
        const data = JSON.stringify(setItemStorage);
        localStorage.setItem("readLest",data);
    }
}

export{
    setItemFromLocalStorage as setStorage,
    getItemFromLocalStorage as getStorage
}