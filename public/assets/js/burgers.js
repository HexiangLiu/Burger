$('.btn_devour').on('click', (e) => {
  const id = $(e.target).data('id');
  $.ajax({
    method: 'put',
    url: `/api/burgers/${id}`,
  }).then(location.reload());
});
