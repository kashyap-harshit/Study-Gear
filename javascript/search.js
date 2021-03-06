let chapterName = document.querySelectorAll(".chapName");
let searchImg = document.querySelector(".s-img");
let search_input = document.getElementById("search");
let hSearch = document.querySelector('#hSearch');
let hSearch_btn = document.querySelector('#searchButton');
let mForm = document.querySelector('.form-m');
let pw = "intitle:PhysicsWallah";
let uy = "intitle:Unacademy";
let vd = "intitle:Vedantu";
let pdh = "intitle:Padhle 11thies JEE & NEET";
let edu = "intitle:EduMantra 11th & 12th SCIENCE";
var video = "";
var mSearch;
var main_ms;
let api_key = "AIzaSyBOw2lflsU6QypVGP41ly2ot0BtwqOHkmg";
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



function errorPass(){
    true
}

function helpTextPhone(){
    tHelp.style.bottom = '0';
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
            tHelp.style.right = '-500%';
            setTimeout(()=>{
                tHelp.style.opacity = '100%';
            }, 1000);
        }, 1000);
    }, 10000);

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
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=6&channelId=" + cId + "&q=" + search, function(data){
        data.items.forEach(item => {
            let vTitleText = item.snippet.title;
            let cIdForLogo = item.snippet.channelId;
            video = `
                    <div class="v-div-1">
                    <ul class="vTitle">
                    <li>
                    <a class="vTitle-a" href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${vTitleText}</a>
                    </li>
                    </ul>
                    </div>
                    `
            $(pDiv).append(video);
            try {
                let vTitle = document.querySelectorAll(".vTitle");
                vTitle[9].style.marginBottom = '16px';
                vTitle[19].style.marginBottom = '16px';
                vTitle[29].style.marginBottom = '16px';
                vTitle[39].style.marginBottom = '16px';
                vTitle[49].style.marginBottom = '16px';
            } catch(e) {
                errorPass()
            }
            
 
        })
        moreVids = `<a class="moreRedirect" href="https://www.youtube.com/results?search_query=${search + cTag}" target="_blank">More Videos</a>`
        $(pDiv).append(moreVids);

        try {
            vdo_not_found(0);
            vdo_not_found(1);
            vdo_not_found(2);
            vdo_not_found(3);
            vdo_not_found(4);
        } catch(e) {
            errorPass()
        }
        
        
   })

}


function searchWithGap(perSearch){ //NCERT
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


function helpTextPacked(){
    if (sDuo.matches) {
                
        helpTextPhone();
    }
    else {
        helpText();
    }
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

catch(e) {errorPass()}


try{
    mSearch = sessionStorage.getItem("mSearch");
    ms = mSearch.replace('\n\t\t\t  \t\t\t\t', '');
    ms_2 = ms.replace('\n\t\t\t  \t\t\t', '');
    ms_2_trim = ms_2.trim()
    sessionStorage.setItem("ms_2_trim", ms_2_trim);
    main_ms = sessionStorage.getItem("ms_2_trim");

    if (main_ms.length > 0 && main_ms != null && main_ms != "null") {
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
   errorPass()
}


try{
    hSearch_btn.addEventListener("click", ()=>{
        sessionStorage.setItem("hSearch", hSearch.value);
        window.location.assign("search-tool.html");
        
    })

}

catch(e) {errorPass()}

try{
    hSearch_val = sessionStorage.getItem("hSearch");
    
    if (hSearch_val.length > 0 && hSearch_val != null && hSearch_val !== "null") {
        helpText()
        search_input.value = hSearch_val;
        searchWithGap(hSearch_val);
        sessionStorage.setItem("hSearch2", hSearch_val);
        hSearch_val = sessionStorage.removeItem("hSearch");
    }
    if (hSearch_val == null || hSearch_val == "null") {
        true
    }
    else{
        true;
    }

}
catch(e) {errorPass()}

try {
    hSearch3_val = sessionStorage.getItem("hSearch3");
    
    if (hSearch3_val.length > 0 && hSearch3_val != null && hSearch3_val !== "null") {
        search_input.value = hSearch3_val;
        
        searchWithGapComp(hSearch3_val);
        sessionStorage.setItem("hSearch", hSearch3_val);
        hSearch3_val = sessionStorage.removeItem("hSearch3");

    }
    if (hSearch3_val == null || hSearch3_val == "null") {
        true
    }
    else {
        true
    }
} catch(e) {errorPass()}


try {
    cSearch1_db = sessionStorage.getItem("cSearch1");
    hSearch2_val = sessionStorage.getItem("hSearch2");
    cBtn.addEventListener("click", ()=>{
        sessionStorage.setItem("cSearch2", cSearch1_db);
        cSearch1_db = sessionStorage.removeItem("cSearch1");
        sessionStorage.setItem("hSearch3", hSearch2_val);
        hSearch2_val = sessionStorage.removeItem("hSearch2");
        window.location.assign("search-tool-c.html");
    })
} catch(e) {errorPass()}



try {
    cSearch2_db = sessionStorage.getItem("cSearch2");
    
    if (cSearch2_db.length > 0 && cSearch2_db != null && cSearch2_db != "null") {
        search_input.value = cSearch2_db;
        helpTextPacked();
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

catch(e) {errorPass()}



try {
    cSearch3_db = sessionStorage.getItem("cSearch3");
    nBtn.addEventListener("click", ()=>{
        sessionStorage.setItem("cSearch4", cSearch3_db);
        cSearch3_db = sessionStorage.removeItem("cSearch3");
        window.location.assign("search-tool.html");
    })
} catch(e) {errorPass()}


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
    errorPass()

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
    errorPass()
    
}




