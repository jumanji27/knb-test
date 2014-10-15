var Routes = function() {
  // All events here
  this.initialize = function() {
    var routes_this = this;

    this.ROOT    = "#/"
    this.AUTH    = this.ROOT + "auth"
    this.SIGN_IN = this.AUTH + "/sign-in";

    this.start_popup = $(".js__p_start");

    this.page_type();
    this.auth();

    $(window).on("hashchange", function() {
      routes_this.auth();
    });
  };

  this.page_type = function() {
    if (this.start_popup[0]) {
      this.start_popup.simplePopup();
    }
    else if (location.hash === "" || location.hash === this.ROOT) {
      location.hash = this.SIGN_IN;
    }
  };

  this.auth = function() {
    var SIGN_UP = this.AUTH + "/sign-up";
    var RESTORE = this.AUTH + "/restore";

    if (location.hash === this.AUTH) {
      location.hash = this.SIGN_IN;
    }
    else if (location.hash === this.SIGN_IN) {
      this.change_screen(
        $(".js__a_sign-in")
      );
    }
    else if (location.hash === SIGN_UP) {
      this.change_screen(
        $(".js__a_sign-up")
      );
    }
    else if (location.hash === RESTORE) {
      this.change_screen(
        $(".js__a_restore")
      );
    }
  };

  this.change_screen = function(screen) {
    $(".js__auth").children("div").addClass("js__none");
    screen.removeClass("js__none");

    if (this.start_popup[0]) {
      $.fn.simplePopup.prototype.show(
        $(".js__popup"),
        $(".js__p_body")
      );
    }
  };
};

