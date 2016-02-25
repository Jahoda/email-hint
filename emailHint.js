var EmailHint = function() {
    var domains;
    
    var measureText = function(el) {
      var span = document.createElement("span");
      span.innerHTML = el.value;
      span.className = "emailHint-measure";
      document.body.appendChild(span);
      var width = span.offsetWidth;
      document.body.removeChild(span);
      return width;
    };
    
    var addHint = function(el) {
        el.parentNode.getElementsByTagName("input")[0].value += el.innerHTML;
        el.innerHTML = "";
    };
    
    var findHint = function(hint, el) {
        var domainsLength = domains.length;
      for (var i = 0; i < domainsLength; i++) {
          var hintElement = el.parentNode.getElementsByTagName("span")[0];
          if (hint.length > 0 && domains[i].indexOf(hint) === 0) {
                hintElement.innerHTML = domains[i].replace(hint, "");
                hintElement.style.left = measureText(el) + "px";
                break;
          }
          else {
              hintElement.innerHTML = "";
          }
      }  
    };
    
    var removeHint = function(el) {
        var hintElement = el.parentNode.getElementsByTagName("span")[0];
        hintElement.innerHTML = "";
    };
    
    var showHint = function(el) {
        var at = el.value.indexOf("@");
        removeHint(el);
        if (at !== -1) {
            var hint = (el.value.substr(at + 1, el.value.length));     
            if (hint) {
               findHint(hint, el);
            }
        }
    };

    var init = function(className, hints) {
      domains = hints;
      var emailElements = document.querySelectorAll("." + className);
      for (var i = emailElements.length - 1; i >= 0; i--) {
        var input = emailElements[i].getElementsByTagName("input")[0];
        input.addEventListener("keyup", function() {
          showHint(this);
        }, false);
        input.addEventListener("blur", function() {
          addHint(this.nextElementSibling);
        }, false);

        var span = emailElements[i].getElementsByTagName("span")[0];
        span.addEventListener("click", function() {
          addHint(this);
        }, false); 

        input.form.addEventListener("submit", function() {
          addHint(span);
        }, false);        
      };
    };

    return {
      init: init
    }
    
}();