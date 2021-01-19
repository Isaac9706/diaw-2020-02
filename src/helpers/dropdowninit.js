/* eslint-disable prettier/prettier */
import 'materialize-css/dist/js/materialize';
/* global M */
const initDropdown = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elements);
    });
};

export default {
    initDropdown,
};