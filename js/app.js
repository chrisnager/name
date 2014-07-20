// Bind input to div
function c() {
    // Store name locally
    var name = document.getElementById( 'v' ).value;

    // Put the object into storage
    localStorage.setItem( 'name', name );

    // Retrieve the object from storage
    console.log( 'retrievedName: ', localStorage.getItem( 'name' ) );
    document.getElementById( 'n' ).innerHTML = localStorage.getItem( 'name' );
};

// Toggle themes
function t() {
    var statusBar = document.querySelector( 'meta[name="apple-mobile-web-app-status-bar-style"]' );
    document.getElementsByTagName( 'html' )[0].classList.toggle( 'light' );
 }

// Apply locally stored name on load
function a() {
    document.getElementById( 'n' ).innerHTML = localStorage.getItem( 'name' );
    document.getElementById( 'v' ).removeAttribute( 'autofocus' );
}

// Toggle controls
function s() {
    document.getElementById( 's' ).classList.toggle( 'is-hidden' );
}

// Toggle controls
function x() {
    document.getElementById( 's' ).classList.remove( 'is-hidden' );
}

// Event listeners
document.getElementById( 'v' ).addEventListener( 'input', c, false );
document.getElementById( 't' ).addEventListener( 'click', t, false );
document.getElementById( 'n' ).addEventListener( 'click', s, false );
document.getElementById( 's' ).addEventListener( 'click', x, false );

window.onload = a();

// Enable fastclick
window.addEventListener( 'load', function() {
    FastClick.attach( document.body );
}, false );

// Disable bounce scrolling
document.ontouchmove = function( e ) { 
    e.preventDefault(); 
}
