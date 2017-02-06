var cone = null;

function init() {
	cone = new Cone(n);

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    render();
}

function render() {
    cone.render();
}

window.onload = init;