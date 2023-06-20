const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn-agregar');
const btnBorrar = document.getElementsByClassName('borrar')

btn.addEventListener('click', function() {
    window.location.href = `agregar/${name.value}/${email.value}/${phone.value}/${subject.value}/${message.value}`;
    console.log('funciona');
});

for (let i of btnBorrar){
    i.addEventListener('click', function() {
        let id = this.getAttribute('id')
        window.location.href = `borrar/${id}`
        console.log('id borrado')
    });
}

