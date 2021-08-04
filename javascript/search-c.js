try {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        sessionStorage.setItem("cSearch1", "null");
        sessionStorage.setItem("cSearch2", "null");
        sessionStorage.setItem("cSearch3", "null");
        sessionStorage.setItem("cSearch4", "null");
        sessionStorage.setItem("ms_2_trim", "null");
        sessionStorage.setItem("hSearch", "null");
        sessionStorage.setItem("hSearch2", "null");
        sessionStorage.setItem("hSearch3", "null");
    } 
    else {
        true
}
} catch(e) {
    console.log(e);
}

