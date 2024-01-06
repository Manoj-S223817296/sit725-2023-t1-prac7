const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.path +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#"></a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.subTitle +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div>" +
      '<div class="card-action">' +
      '<a class="btn red delete-btn" data-id="' +
      item._id +
      '">Delete</a>' +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });

  $(".delete-btn").click(function () {
    let catId = $(this).data("id");
    deleteCat(catId);
  });
};

const formSubmitted = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.subTitle = $("#subTitle").val();
  formData.path = $("#path").val();
  formData.description = $("#description").val();

  console.log(formData);
  postCat(formData);
};

function postCat(cat) {
  $.ajax({
    url: "/api/cat",
    type: "POST",
    data: cat,
    success: (result) => {
      if (result.statusCode === 201) {
        alert("cat post successful");
      }
    },
  });
}

function getAllCats() {
  $.ajax({
    url: "/api/cat",
    type: "GET",
    success: (response) => {
      if (response.statusCode === 200) {
        addCards(response.data);
      }
    },
  });
}

function deleteCat(catId) {
  $.ajax({
    url: "/api/cat/" + catId,
    type: "DELETE",
    success: (result) => {
      if (result.statusCode === 200) {
        alert("Cat deleted successfully");
      }
    },
  });
}

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    formSubmitted();
  });
  $(".modal").modal();
  getAllCats();
});
