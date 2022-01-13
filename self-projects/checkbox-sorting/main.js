jQuery(document).ready(function ($) {
  // filter show or hide showfilter
  $("#showfilters").on("click", function (e) {
    $(".filter-projects__content").slideToggle();
  });

  // checkbox
  var filters = {
      services: [],
      categories: [],
    },
    active_filters = "";

  // clear filter
  $("#clearFilter").on("click", function (e) {
    filters.services.splice(0, filters.services.length);
    filters.categories.splice(0, filters.categories.length);
    active_filters = "No filter selected!";
    $("#filter-text").text(active_filters);
    $('.filter-projects__content__list input[type="checkbox"]').prop(
      "checked",
      false
    );
  });

  // filter button style
  $("#showfilters").on("click", function (e) {
    $("#showfilters").toggleClass("filter-projects__filter2");
  });

  $('.filter-projects__content__list input[type="checkbox"]').change(
    function () {
      var type = $(this).attr("data-type"),
        action_type = $(this).prop("checked"),
        id = $(this).attr("id"),
        label = $("[for=" + id + "]");

      if (action_type) {
        filters[type].push(label.text());
      } else if (!action_type) {
        var i = filters[type].indexOf(label.text());
        if (i !== -1) {
          filters[type].splice(i, 1);
        }
      }
      active_filters = "";
      if (
        filters["categories"].length == 0 &&
        filters["services"].length == 0
      ) {
        active_filters = "No filter selected!";
        $("#filter-text").text(active_filters);
      }

      if (filters["categories"].length) {
        active_filters = filters["categories"].join(", ");
      }
      if (filters["services"].length) {
        if (active_filters !== "") {
          active_filters += ", ";
        }
        active_filters += filters["services"].join(", ");
      }
      $("#filter-text").text(active_filters);
    }
  );
});
