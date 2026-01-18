function setButtonLoading(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.classList.add("is-loading");
    button.disabled = true;
  } else {
    button.classList.remove("is-loading");
    button.disabled = false;
  }
}

function setupLoadingForms() {
  var forms = document.querySelectorAll("[data-loading-form]");
  forms.forEach(function (form) {
    var submitButton = form.querySelector("[data-loading-button]");
    var successAlert = form.querySelector('[data-alert="success"]');
    var errorAlert = form.querySelector('[data-alert="error"]');

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (successAlert) successAlert.classList.add("is-hidden");
      if (errorAlert) errorAlert.classList.add("is-hidden");

      setButtonLoading(submitButton, true);

      var nextState = form.dataset.nextState || "success";

      window.setTimeout(function () {
        setButtonLoading(submitButton, false);

        if (nextState === "success" && successAlert) {
          successAlert.classList.remove("is-hidden");
          form.dataset.nextState = "error";
        } else if (nextState === "error" && errorAlert) {
          errorAlert.classList.remove("is-hidden");
          form.dataset.nextState = "success";
        } else if (successAlert) {
          successAlert.classList.remove("is-hidden");
        }
      }, 900);
    });
  });
}

function setupSessionActions() {
  var buttons = document.querySelectorAll("[data-session-action]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.disabled) return;
      setButtonLoading(button, true);

      window.setTimeout(function () {
        setButtonLoading(button, false);
      }, 800);
    });
  });
}

function setupToggles() {
  var toggles = document.querySelectorAll("[data-toggle]");
  toggles.forEach(function (wrapper) {
    var control = wrapper.querySelector(".toggle");
    var labelOn = wrapper.getAttribute("data-label-on");
    var labelOff = wrapper.getAttribute("data-label-off");
    var status = wrapper.querySelector("[data-toggle-status]");

    wrapper.addEventListener("click", function () {
      var isOn = control.classList.toggle("is-on");
      if (status && labelOn && labelOff) {
        status.textContent = isOn ? labelOn : labelOff;
      }
    });
  });
}

function setupCountdowns() {
  var countdown = document.querySelector("[data-countdown-seconds]");
  if (!countdown) return;

  var initial = parseInt(countdown.getAttribute("data-countdown-seconds"), 10);
  if (Number.isNaN(initial) || initial <= 0) return;

  var remaining = initial;
  var button = document.querySelector("[data-resend]");

  var interval = window.setInterval(function () {
    remaining -= 1;
    if (remaining <= 0) {
      window.clearInterval(interval);
      countdown.textContent = "You can now resend a new code.";
      if (button) {
        button.disabled = false;
      }
      return;
    }

    countdown.textContent = "Resend code in " + remaining + "s";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  setupLoadingForms();
  setupSessionActions();
  setupToggles();
  setupCountdowns();
});

