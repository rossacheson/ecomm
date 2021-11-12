import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.datatype.number(50)} items in your cart</div>`;

    el.innerHTML = cartText;
};

// for dev in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    // assuing our container doesn't have an element with id 'dev-products', and dev does
    if (el) {
        // we are probably running in isolaiton
        mount(el);
    }
}

// for container to use
export { mount };
