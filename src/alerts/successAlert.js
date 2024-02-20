import React from 'react'
import Swal from 'sweetalert2';

function successAlert(title = "", message = "Successfully done") {
    Swal.fire({
        icon: "success",
        title: title,
        text: message,
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Ok",
    });
}

export default successAlert