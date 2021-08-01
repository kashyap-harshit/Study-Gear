let chapterName = document.querySelectorAll(".chapName");
let searchImg = document.querySelector(".s-img");
let search_input = document.getElementById("search");
let hSearch = document.querySelector('#hSearch');
let hSearch_btn = document.querySelector('#searchButton');
let mForm = document.querySelector('.form-m');
let jee = "jee";
let neet = "neet";
let pw = " intitle: PhysicsWallah";
let uy = " intitle: Unacademy";
let vd = " intitle: Vedantu";
let pdh = " intitle: Padhle 11thies JEE & NEET";
let edu = " intitle: EduMantra 11th & 12th SCIENCE";
var video = "";
var mSearch;
var main_ms;
let api_key = "AIzaSyBOw2lflsU6QypVGP41ly2ot0BtwqOHkmg";
// let api_key = "AIzaSyBpAB077_wvU-dO3waPgrOQor2Av9JFQ-Q";
var uy_iframe = document.querySelector(".uy_iframe");
let hVids = 0;
let tHelp = document.querySelector(".help-t");
let tpHelp = document.querySelector(".help-t-p");
let sImg = document.querySelector(".s-img");
let sHead = document.querySelector(".s-head");
let vdo_sec = document.querySelectorAll(".v-l-boxes-main");
let vdo_update = 0;
let sDuo = window.matchMedia("(max-width: 540px)");
let vdoBoxes = document.querySelectorAll(".vdo-boxes");
let cBtn = document.querySelector(".c-btn");
let nBtn = document.querySelector(".n-btn");


function helpTextPhone(right_p){
    tHelp.style.bottom = '0%';
    tHelp.style.opacity = '100%';
    tpHelp.style.paddingRight = 'unset';
    tpHelp.style.paddingLeft = 'unset';
    tpHelp.style.textAlign = 'center';
    tHelp.style.right = 'unset';
    tHelp.style.width = '100%';
    tHelp.style.transition = '0.3s';
    tHelp.style.borderRadius = 'unset';
    setTimeout(()=>{
        tHelp.style.opacity = '0%';
    }, 20000);

}
function helpText(){
    tHelp.style.right = "-1.5%";
    setTimeout(()=>{
        tHelp.style.opacity = '0%';
        setTimeout(()=>{
            tHelp.style.right = '-200%';
            setTimeout(()=>{
                tHelp.style.opacity = '100%';
            }, 1000);
        }, 1000);
    }, 20000);

}

function vdo_not_found(vdo_sec_index){

    if (vdoBoxes[vdo_sec_index].children.length == 1){
        vdoBoxes[vdo_sec_index].innerHTML = "No Videos Found"
        vdoBoxes[vdo_sec_index].classList.toggle("no-vid");
        vdoBoxes[vdo_sec_index].classList.toggle("v-l-boxes-main");
    }
    else{
        true
    }
}

function videoSearch(key, search, pDiv, cId, cTag){
    $(pDiv).empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=1&channelId=" + cId + "&q=" + search, function(data){
        data.items.forEach(item => {
            video = `<iframe class="videoList" width="320" height="240" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
            $(pDiv).append(video); 
        })
        moreVids = `<a class="moreRedirect" href="https://www.youtube.com/results?search_query=${search + cTag}" target="_blank">More Videos</a>`
        $(pDiv).append(moreVids);
        try {
            vdo_update = vdo_update + 1;
            vdo_not_found(0);
            vdo_not_found(1);
            vdo_not_found(2);
            vdo_not_found(3);
            vdo_not_found(4);
        } catch(e) {
            true
        }
        
        
   })

}


function searchWithGap(perSearch){
    timeForEach = 500;
    videoSearch(api_key, perSearch, "#v-physicsWallah", "UCiGyWN6DEbnj2alu7iapuKQ", pw);
            setTimeout(()=>{
                videoSearch(api_key, perSearch, "#v-unacademy", "UCR3F3TPXHqXpotvmpyqXeQg", uy);
                setTimeout(()=>{
                    videoSearch(api_key, perSearch, "#v-vedantu", "UCGbQ1bYN0TcYzSc5rMp37Jg", vd);
                    setTimeout(()=>{
                        videoSearch(api_key, perSearch, "#v-edumantra", "UCStzvA76mWwkclGnj7cPG9Q", edu);
                        setTimeout(()=>{
                            videoSearch(api_key, perSearch, "#v-padhle", "UC9QEujXYKP4rWE0NNuZWrug", pdh);
                        }, timeForEach)
                    }, timeForEach)
                }, timeForEach)
            }, timeForEach)
}

function searchWithGapComp(perSearch){
    timeForEach = 500;
    videoSearch(api_key, perSearch, "#v-unacademy-jee", "UCZNNx4KYmCkwxCLdsHyWqQA", pw);
            setTimeout(()=>{
                videoSearch(api_key, perSearch, "#v-unacademy-neet", "UCdQwYksctqqiRwqp3PiJMWA", uy);
                setTimeout(()=>{
                    videoSearch(api_key, perSearch, "#v-vedantu-jee", "UClaQJq84XMtMkL44zDmL-Tg", vd);
                    setTimeout(()=>{
                        videoSearch(api_key, perSearch, "#v-vedantu-neet", "UCqaq3Cwa7m_EsqlvfZh6uyw", edu);
                    }, timeForEach)
                }, timeForEach)
            }, timeForEach)
}


try {
    sHead.addEventListener("click", ()=>{
        if (sDuo.matches) {
            
            helpTextPhone();


        }
        else {
            helpText("-1.5%");
        }
        
    })
    
} catch(e) {
    true
}

try{
    function chapterNameTaker(chapNameIndex){
        chapterName[chapNameIndex].addEventListener("click", ()=>{
            mSearch = chapterName[chapNameIndex].textContent;
            sessionStorage.setItem("mSearch", mSearch);

            window.location.assign("../search-tool.html");
        })
    }

    chapterNameTaker(0);
    chapterNameTaker(1);
    chapterNameTaker(2);
    chapterNameTaker(3);
    chapterNameTaker(4);
    chapterNameTaker(5);
    chapterNameTaker(6);
    chapterNameTaker(7);
    chapterNameTaker(8);
    chapterNameTaker(9);
    chapterNameTaker(10);
    chapterNameTaker(11);
    chapterNameTaker(12);
    chapterNameTaker(13);
    chapterNameTaker(14);
    chapterNameTaker(15);
    
}

catch(e){
    // console.log("First Code's : " + e);
    true
}

try{
    mSearch = sessionStorage.getItem("mSearch");
    ms = mSearch.replace('\n\t\t\t  \t\t\t\t', '');
    ms_2 = ms.replace('\n\t\t\t  \t\t\t', '');
    ms_2_trim = ms_2.trim()
    sessionStorage.setItem("ms_2_trim", ms_2_trim);
    main_ms = sessionStorage.getItem("ms_2_trim");


    if (main_ms.length > 0) {
        search_input.value = main_ms;
        helpText();
        searchWithGap(main_ms);
        sessionStorage.setItem("cSearch1", main_ms);
        main_ms = sessionStorage.removeItem("ms_2_trim");
        mSearch = sessionStorage.removeItem("mSearch");
    }
    if (main_ms == null && mSearch == null){
        true
    }

    else{
        true
    }

}

catch(e){
    // console.log("Second Code's : " + e)
    true
}


try {
    cSearch1_db = sessionStorage.getItem("cSearch1");
    cBtn.addEventListener("click", ()=>{
        sessionStorage.setItem("cSearch2", cSearch1_db);
        cSearch1_db = sessionStorage.removeItem("cSearch1");
        window.location.assign("search-tool-c.html");
    })
} catch(e) {
    console.log(e)
}

try {
    cSearch2_db = sessionStorage.getItem("cSearch2");
    if (cSearch2_db.length > 0 && cSearch2_db != null && cSearch2_db != "null") {
        search_input.value = cSearch2_db;
        helpText();
        searchWithGapComp(cSearch2_db);
        sessionStorage.setItem("cSearch3", cSearch2_db);
        cSearch2_db = sessionStorage.removeItem("cSearch2");
    }
    if (cSearch2_db == null || cSearch2_db == "null") {
        true
    }
    else{
        true
    }
} 

catch(e) {
    console.log(e)
}

try {
    cSearch3_db = sessionStorage.getItem("cSearch3");
    nBtn.addEventListener("click", ()=>{
        sessionStorage.setItem("cSearch4", cSearch3_db);
        cSearch3_db = sessionStorage.removeItem("cSearch3");
        window.location.assign("search-tool.html");
    })
} catch(e) {
    console.log(e)
}


try {
    cSearch4_db = sessionStorage.getItem("cSearch4");
    if (cSearch4_db.length > 0 && cSearch4_db != null && cSearch4_db != "null") {
        search_input.value = cSearch4_db;
        helpText();
        searchWithGap(cSearch4_db);
        sessionStorage.setItem("cSearch2", cSearch4_db);
        cSearch4_db = sessionStorage.removeItem("cSearch4");
    }
    if (cSearch4_db == null || cSearch4_db == "null") {
        true
    }
    else{
        true
    }
} catch(e) {
    console.log(e)
}

try{
    $("#form-m").submit(function(event){
        event.preventDefault()
        var search = $("#search").val()
        searchWithGap(search);

    })
    searchImg.addEventListener("click", ()=>{
        event.preventDefault()
        var search = $("#search").val();
        searchWithGap(search);
             
    });
}

catch(e){
    console.log("Third Code's : " + e);
    // true
}


try{
    hSearch_btn.addEventListener("click", ()=>{
        sessionStorage.setItem("hSearch", hSearch.value);
        window.location.assign("search-tool.html");
        
    })

}

catch(e){
    // console.log(e)
    true
}

try{
    hSearch_val = sessionStorage.getItem("hSearch");

    if (hSearch_val.length > 0) {
        search_input.value = hSearch_val;
        searchWithGap(hSearch_val);
        hSearch_val = sessionStorage.removeItem("hSearch");
    }
    else{
        true;
    }

}
catch(e){
    // console.log(e);
    true
}


