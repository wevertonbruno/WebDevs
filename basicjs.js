function showModal(modalID, element){
    const modal = document.getElementById(modalID);
    const imgModal = document.getElementById('img-modal')
    imgModal.src = element.src
    modal.classList.add('open')

}
const images = []
window.onload = function (){
    for(let i=1; i<=9; i++){
        images[i] = document.getElementById('img'+i)
        images[i].addEventListener('click', function(){
            showModal('modal-img-id', images[i])
        })
    }
}


