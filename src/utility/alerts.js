import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        // Pause on hover
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
    }
})

export function warning(msg) {
    Toast.fire({
        icon: 'error',
        title: msg
    })
}

export function confirmation(msg) {
    Swal.fire({
        icon: "success",
        title: "Success!",
        text: `${msg}`
    });
}