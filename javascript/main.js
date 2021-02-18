function navBar()
{
    document.getElementById("lok-nav").innerHTML = '<nav class="navbar navbar-expand-xl bg-dark navbar-dark">\
      <label for="menu_btn" class="btn_toggler">\
        <i class="fas fa-bars lines"></i>\
      </label>\
      <img id="Logo" src="../img/logo_img.png"/>\
      <ul class="navbar-nav" style="width:100%">\
        <li class="nav-item active">\
          <h4 id="brand-name">Lokavidya</h4>\
        </li>\
        <li style="margin: 0 auto">\
          <div class="form-group search" style="width:150%" >\
            <div class="input-group" style="width:auto;">\
              <span class="input-group-prepend" style="width:100%;">\
                <div class="input-group qInput" style="background-color: #ffffff; border-style: none; border-radius: 5px;">\
              <span style="color:#E5802A; align-self: center; padding-left: 10px;" class="fa fa-search"></span>\
              <input class="form-control py-2 px-4 border-left-0  qbox" type="search" \
              style="background-color: #ffffff; color:#E5802A; border-style: none;" placeholder="Search" id="example-search-input" />\
                </div>\
              </span>\
            </div>\
          </div>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="#"><i style="font-size: 150%;" class="fas fa-envelope"></i></a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="#"><i style="font-size: 150%;" class="fas fa-user-circle"></i></a>\
        </li>\
      </ul>\
    </nav>'
}

navBar();