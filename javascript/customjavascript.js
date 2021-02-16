function iconChanger(id)
{
    if(document.getElementById(id).className == "fas fa-minus float-right")
    {
        document.getElementById(id).className = "fas fa-plus float-right";
    }
    else
    {
        document.getElementById(id).className = "fas fa-minus float-right";
    }
}