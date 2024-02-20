import React from 'react'
import Swal from 'sweetalert2';

function errorAlert(title = "Oops...", message = "Something went wrong!") {
    Swal.fire({
        icon: "error",
        title: title,
        text: message,
        showCancelButton: true,
        cancelButtonText: "Close",
        showConfirmButton: false,
    });
}

export default errorAlert