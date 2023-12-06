function clearAllFilters(){

}

function closeexplorer(){
    document.getElementById("explore").style.display = "none";
}

function labsview(){
    document.getElementById("component_id1").style.display = "block";
    document.getElementById("component_id2").style.display = "block";
    document.getElementById("component_id3").style.display = "none";
    document.getElementById("component_id4").style.display = "none";
    document.getElementById("component_id5").style.display = "none";
    document.getElementById("component_id6").style.display = "none";
    document.getElementById("component_id7").style.display = "none";

    document.getElementById("projects_filtertab1").style.display = "block";
    document.getElementById("projects_filtertab2").style.display = "block";
    document.getElementById("projects_filtertab3").style.display = "block";
    document.getElementById("projects_filtertab4").style.display = "block";
    document.getElementById("projects_filtertab5").style.display = "none";

    document.getElementById("explorertab1").classList.add("selected_explorer_component");
    document.getElementById("explorertab2").classList.remove("selected_explorer_component");
    document.getElementById("explorertab3").classList.remove("selected_explorer_component");
    document.getElementById("explorertab4").classList.remove("selected_explorer_component");

    document.getElementById("postslabs").style.display = "block";
    document.getElementById("postschallenge").style.display = "none";
    document.getElementById("postsresources").style.display = "none";
    document.getElementById("postsprojects").style.display = "none";
}
function challengesview(){
    document.getElementById("component_id1").style.display = "none";
    document.getElementById("component_id2").style.display = "none";
    document.getElementById("component_id3").style.display = "block";
    document.getElementById("component_id4").style.display = "block";
    document.getElementById("component_id5").style.display = "none";
    document.getElementById("component_id6").style.display = "none";
    document.getElementById("component_id7").style.display = "none";

    document.getElementById("projects_filtertab1").style.display = "block";
    document.getElementById("projects_filtertab2").style.display = "block";
    document.getElementById("projects_filtertab3").style.display = "block";
    document.getElementById("projects_filtertab4").style.display = "block";
    document.getElementById("projects_filtertab5").style.display = "none";

    document.getElementById("explorertab1").classList.remove("selected_explorer_component");
    document.getElementById("explorertab2").classList.add("selected_explorer_component");
    document.getElementById("explorertab3").classList.remove("selected_explorer_component");
    document.getElementById("explorertab4").classList.remove("selected_explorer_component");

    document.getElementById("postslabs").style.display = "none";
    document.getElementById("postschallenge").style.display = "block";
    document.getElementById("postsresources").style.display = "none";
    document.getElementById("postsprojects").style.display = "none";
}
function resourcesview(){
    document.getElementById("component_id1").style.display = "none";
    document.getElementById("component_id2").style.display = "none";
    document.getElementById("component_id3").style.display = "none";
    document.getElementById("component_id4").style.display = "none";
    document.getElementById("component_id5").style.display = "block";
    document.getElementById("component_id6").style.display = "block";
    document.getElementById("component_id7").style.display = "block";

    document.getElementById("projects_filtertab1").style.display = "block";
    document.getElementById("projects_filtertab2").style.display = "block";
    document.getElementById("projects_filtertab3").style.display = "block";
    document.getElementById("projects_filtertab4").style.display = "block";
    document.getElementById("projects_filtertab5").style.display = "none";

    document.getElementById("explorertab1").classList.remove("selected_explorer_component");
    document.getElementById("explorertab2").classList.remove("selected_explorer_component");
    document.getElementById("explorertab3").classList.add("selected_explorer_component");
    document.getElementById("explorertab4").classList.remove("selected_explorer_component");

    document.getElementById("postslabs").style.display = "none";
    document.getElementById("postschallenge").style.display = "none";
    document.getElementById("postsresources").style.display = "block";
    document.getElementById("postsprojects").style.display = "none";
}
function projectsview(){
    document.getElementById("component_id1").style.display = "none";
    document.getElementById("component_id2").style.display = "none";
    document.getElementById("component_id3").style.display = "none";
    document.getElementById("component_id4").style.display = "none";
    document.getElementById("component_id5").style.display = "none";
    document.getElementById("component_id6").style.display = "none";
    document.getElementById("component_id7").style.display = "none";

    document.getElementById("projects_filtertab1").style.display = "none";
    document.getElementById("projects_filtertab2").style.display = "none";
    document.getElementById("projects_filtertab3").style.display = "none";
    document.getElementById("projects_filtertab4").style.display = "none";
    document.getElementById("projects_filtertab5").style.display = "block";

    document.getElementById("explorertab1").classList.remove("selected_explorer_component");
    document.getElementById("explorertab2").classList.remove("selected_explorer_component");
    document.getElementById("explorertab3").classList.remove("selected_explorer_component");
    document.getElementById("explorertab4").classList.add("selected_explorer_component");
    
    document.getElementById("postslabs").style.display = "none";
    document.getElementById("postschallenge").style.display = "none";
    document.getElementById("postsresources").style.display = "none";
    document.getElementById("postsprojects").style.display = "block";
}


