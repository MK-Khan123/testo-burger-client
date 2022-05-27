import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

MySwal.fire({
  title: <p>'Oops...'</p>,
  icon: 'error',
  text: 'Something went wrong!',
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})