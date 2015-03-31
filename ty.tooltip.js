/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ( $ ) {

    var methods = {
        init: function () {
            return this.each( function () {
                var $this = $( this );
                $this.attr( 'tooltip', '123' );
                alert( 'AS' );
            } );
        }

    };

    $.fn.tyTooltip = function ( arg ) {
        if ( methods[arg] ) {
            return methods[arg].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof arg === 'object' || !arg ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' + method + ' не существует для jQuery.tyTooltip' );
        }
    };

})( jQuery );


(function ( $ ) {

    var methods = {
        init: function ( options ) {

            return this.each( function () {
                $( window ).bind( 'resize.tooltip', methods.reposition );
            } );

        },
        destroy: function ( ) {

            return this.each( function () {
                $( window ).unbind( '.tooltip' );
            } )

        },
        reposition: function ( ) {
            // ... 
        },
        show: function ( ) {
            // ... 
        },
        hide: function ( ) {
            // ... 
        },
        update: function ( content ) {
            // ...
        }
    };

    $.fn.tooltip = function ( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' + method + ' не существует для jQuery.tooltip' );
        }

    };

})( jQuery );



(function () {
    alert( 'ASD' );
    $( '.ty-tt' ).tyTooltip();
})();