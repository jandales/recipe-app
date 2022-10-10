const deleteIcon =  document.getElementById('delete');

deleteIcon.addEventListener('click',  () => {
    const id = deleteIcon.dataset.id;
    alert(id);
    // axios.get('http://127.0.0.1:3000/recipe/destroy/id')
    // .then(response => {
    //     const users = response.data.data;
    //     console.log(`GET list users`, users);
    // })
    // .catch(error => console.error(error));
});
